const child_process = require('child_process');
const express = require('express');
const revealRunInTerminal = require('reveal-run-in-terminal');

let app = express();

app.use(revealRunInTerminal());
app.use(express.static('app'));
app.use(express.static('node_modules/reveal.js'));

app.listen(process.env.PORT || 5000);
