const NOTES_REGEX = /^\/\*=notes$\n([\s\S]*)^\*\/$/m;
const TITLE_REGEX = /^\/\*=title:(.*)\*\/$/m;


class CommandRunner {
  static run(command, fn) {
    this._instance = this._instance || new CommandRunner();
    return this._instance.run(command, fn);
  }

  constructor() { this.lastCommand = Promise.resolve(); }

  run(command, fn) {
    this.lastCommand = this.lastCommand.then(() => {
      return new Promise((resolve, reject) => {
        let source = new EventSource(`/execute?command=${command}`);
        source.addEventListener('message', e => fn(JSON.parse(e.data)));
        source.addEventListener('done', () => resolve(source.close()));
      });
    });
    return this.lastCommand;
  }
}

class RunInTerminalSlide {
  static forSection(section) {
    return this.slides.filter((s) => s.section === section)[0];
  }

  static loadAll() {
    let sections = document.querySelectorAll('section[data-run-in-terminal]');
    this.slides = [].map.call(sections, (section) => new RunInTerminalSlide(section));
  }

  static reloadAllExcept(slide) {
    this.slides
      .filter(s => !slide || s.section !== slide.section)
      .forEach(s => {
        s.container.scrollTop = 0;
        s.loadCode();
      });
  }

  constructor(section) {
    this.section = section;
    this.section.style.display = 'none';

    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.section.appendChild(this.container);

    this.addElement('title', {tagName: 'span', parent: 'container'});
    this.title.innerText = this.property('src');

    ['code', 'term'].forEach(name => this.addElement(name, {
      tagName: 'pre',
      classes: ['hljs'],
      parent: 'container'
    }));

    if (this.property('language')) {
      this.code.classList.add(this.property('language'));
    }

    if (this.property('justCode')) {
      this.section.classList.add('just-code');
    } else {
      ['showCommand', 'execute'].forEach(name => this.addElement(name, {
        classes: ['fragment'],
        dataset: {runInTerminal: name}
      }));
    }

    this.loadCode();
  }

  loadCode() {
    this.section.style.display = 'none';
    this.promisedCode
      .then(slideData => {
        this.code.innerText = slideData.code;
        if (slideData.notes) {
          this.addElement('notes', {tagName: 'aside'});
          this.notes.innerHTML = slideData.notes;
        }

        if (slideData.title) {
          this.title.innerHTML = marked(slideData.title);
        }
      })
      .then(() => hljs.highlightBlock(this.code))
      .then(() => {
        [].forEach.call(this.code.querySelectorAll('br'), br => {
          let span = document.createElement('span');
          span.classList.add('line');
          this.code.insertBefore(span, br);
        });
      })
      .then(() => {
        this.code.innerHTML = this.code.innerHTML
          .replace(/\|\*runInTerminalAddStart\*\|/g, '<span class="added">')
          .replace(/\|\*runInTerminalAddEnd\*\|/g, '</span>')
      })
      .then(() => this.renderPrompt())
      .then(() => this.section.style.display = 'block');
  }

  addElement(name, options) {
    options = options || {};

    this[name] = document.createElement(options.tagName || 'div');
    (options.classes || []).concat([name]).forEach(clazz => {
      this[name].classList.add(clazz)
    });
    Object.assign(this[name].dataset, options.dataset || {});

    this[options.parent || 'section'].appendChild(this[name]);
    return this[name];
  }

  scrollToBottom() {
    let interval = setInterval(() => {
      let top = this.container.scrollTop;
      this.container.scrollTop += 2;
      if (top === this.container.scrollTop) {
        clearInterval(interval);
      }
    }, 1);
  }

  renderPrompt() {
    this.term.innerText = `> █`;
  }

  renderCommand() {
    this.term.innerText = `> ${this.command}█`;
  }

  executeCommand() {
    this.term.innerText = `> ${this.command}\n`;
    CommandRunner.run(this.command, output => {
      this.term.innerText = `${this.term.innerText.trim()}\n${output}`
      this.scrollToBottom();
    }).then(() => {
      this.term.innerText = `${this.term.innerText.trim().replace(/█/g, '')}\n> █`;
      this.scrollToBottom();
    });
  }

  property(prop) {
    return this.section.dataset[prop];
  }

  get command() {
    return this.property('command') || `node ${this.property('src')}`;
  }

  get promisedCode() {
    let srcs = [fetch(this.property('src'))];

    if (this.property('diffFrom')) {
      srcs.push(fetch(this.property('diffFrom')));
    }

    return Promise
      .all(srcs.map(src => src.then(code => code.text())))
      .then(resolved => {
        return resolved.map(text => {
          let notes = text.match(NOTES_REGEX);
          let title = text.match(TITLE_REGEX);
          let code = text.replace(NOTES_REGEX, '').replace(TITLE_REGEX, '');
          return {
            notes: notes ? notes[1] : null,
            title: title ? title[1] : null,
            code: `${code.trim()}\n`
          }
        });
      }).then(sildeData => {
        if (sildeData.length === 1) return sildeData[0];

        let code = JsDiff.diffWords(sildeData[1].code, sildeData[0].code)
          .filter(words => !words.removed)
          .map(words => words.added ? `|*runInTerminalAddStart*|${words.value}|*runInTerminalAddEnd*|` : words.value)
          .join('');

        return {code, notes: sildeData[0].notes, title: sildeData[0].title};
      });
  }
}

(() => {
  RunInTerminalSlide.loadAll();

  Reveal.addEventListener('fragmentshown', function(event) {
    if (!event.fragment.dataset.runInTerminal) return;
    let slide = RunInTerminalSlide.forSection(event.fragment.parentElement);

    if (event.fragment.dataset.runInTerminal === 'showCommand') {
      slide.renderCommand();
      slide.scrollToBottom();
    } else if (event.fragment.dataset.runInTerminal === 'execute') {
      slide.executeCommand();
    }
  });

  Reveal.addEventListener('fragmenthidden', function(event) {
    if (!event.fragment.dataset.runInTerminal) return;
    let slide = RunInTerminalSlide.forSection(event.fragment.parentElement);

    if (event.fragment.dataset.runInTerminal === 'showCommand') {
      slide.renderPrompt();
    } else if (event.fragment.dataset.runInTerminal === 'execute') {
      slide.renderCommand();
    }
  });

  Reveal.addEventListener('slidechanged', function(event) {
    let slide = RunInTerminalSlide.forSection(event.currentSlide);
    RunInTerminalSlide.reloadAllExcept(slide);
  });
})();
