const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const f = readFileSync('./mainfolder/subfolder/first.txt', 'utf8');
const s = readFileSync('./mainfolder/subfolder/sec.txt', 'utf8');

console.log(f, s);

writeFileSync('./mainfolder/subfolder/third.txt', `here is the result of prev. console: ${f}, ${s}`)
console.log('done with this task');