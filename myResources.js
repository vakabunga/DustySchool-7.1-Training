const fs = require('fs');
require('dotenv').config();

const filename = process.env.FILE;

fs.renameSync('text.txt', filename);

const fileData = fs.readFileSync(filename, 'utf-8');
console.log(fileData);

console.log(process.env);
