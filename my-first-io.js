'use strict'

const fs = require('fs')

const contents = fs.readFileSync(process.argv[2], 'utf8');
const lines = contents.split('\n');
const stdout = lines.length - 1;
console.log(stdout);