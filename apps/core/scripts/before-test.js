const fs = require('node:fs')
const path = require('node:path')

const oldPackage = fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8');

const str = oldPackage.replace('{', `{\n\t"type": "module",`);


fs.readFileSync(path.join(__dirname, '../package.json'));