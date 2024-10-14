const fs = require('node:fs')
const path = require('node:path')

const pkgFilePath = path.join(__dirname, '../package.json');

const oldPackage = fs.readFileSync(pkgFilePath, 'utf-8');

const str = oldPackage.replace('{', `{\n\t"type": "module",`);


fs.writeFileSync(pkgFilePath, str);