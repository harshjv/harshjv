#!/usr/bin/env node

const { white, cyan, bold, blue } = require('colorette')

const info = {
  Work: white(`${blue('ConsenSys')}, Software Engineer`),
  Github: cyan('harshjv'),
  Twitter: cyan('@harshjv'),
  LinkedIn: cyan('linkedin.com/in/harshjv') + '\n',
  Email: cyan('hello@harshjv.com'),
  Card: white('npx harshjv')
}

const head = `${blue(bold('  Harsh Vakharia') + ' /')} ${blue('harshjv')} / ${white('harshjv.com')}`

const body = Object.entries(info)
  .map(([key, value]) => [white(bold(`${key}:`.padStart(16, ' '))), value].join(' '))
  .join('\n')

console.log('\n' + [head, body].join('\n\n') + '\n')
