const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//백틱(`)내에 작성된 문자 또는 특수문자는 모두 입력된 형태 그대로 출력된다.

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`)
    
});