#!/usr/bin/env node

const command = require('./index')

if (!command) {
  console.error(`The ${process.platform} platform isn't currently supported.`)
  process.exit(1)
}

const { spawn } = require('child_process');

const args = process.argv.slice(2)
const child = spawn(command, args, { stdio: 'inherit' })

child.on('close', (code) => {
  process.exit(code)
})
