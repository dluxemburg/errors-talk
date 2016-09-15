const child_process = require('child_process');
const express = require('express');

let app = express();

app.get('/execute', (req, res) => {
  let args = req.query.command.split(' ');
  let command = args.shift();
  let ps = child_process.spawn(command, args);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive'
  });

  [ps.stdout, ps.stderr].forEach(pipe => {
    pipe.on('data', (data) => {
      res.write(`data: ${JSON.stringify(data.toString())}\n\n`);
    });
  });

  ps.on('exit', (exit) => {
    console.log(`${ps.pid}: ${ps.spawnargs.join(' ')} (${exit})`);
    res.write(`event: done\ndata: done\n\n`);
    res.end();
  });
});

app.use(express.static('.'));
app.use(express.static('app'));
app.use(express.static('node_modules/reveal.js'));

app.listen(process.env.PORT || 5000);
