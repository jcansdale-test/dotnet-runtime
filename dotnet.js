#!/usr/bin/env node
const command = require('./index')
if (command === undefined) {
    let platform = process.platform
    console.error(`The ${platform} platform isn't currently supported.`)
    process.exit(1)
}

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
