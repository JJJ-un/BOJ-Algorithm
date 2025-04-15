const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

//Number(input[0]) + Number(input[1]) Number가 필요있나??
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let value = Number(input[0]) + Number(input[1]);
    let a = Number(input[0])
    let b = Number(input[1])
    console.log(`${a} + ${b} = ${value}`);
});