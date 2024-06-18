const { readFileSync, writeFileSync } = require('fs');

writeFileSync('./temporary/fileA.txt', 'One\n', { flag: 'a' });
writeFileSync('./temporary/fileA.txt', 'Two\n', { flag: 'a' });
writeFileSync('./temporary/fileA.txt', 'Buckle My Shoe\n', { flag: 'a' });

const file = readFileSync('./temporary/fileA.txt', 'utf-8');

console.log(file);