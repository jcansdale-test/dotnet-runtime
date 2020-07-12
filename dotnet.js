#!/usr/bin/env node
const command = require('./index')
const { spawn } = require('child_process');

const child = spawn(command, process.argv.slice(2));

child.stdout.on('data', (data) => {
  console.log(`${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`${data}`);
});

child.on('close', (code) => {
  process.exit(code)
});
