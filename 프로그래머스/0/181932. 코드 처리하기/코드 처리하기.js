function solution(code) {
    var ret = [];
    var mode = 0;

    for (let i = 0; i < code.length; i++) {
        if (mode == 0) {
            if (code[i] !== '1') {
                if (i % 2 === 0) {
                    ret.push(code[i]);
                }
            } else {
                mode = 1;
            }
        } else {
            if (code[i] === '1') {
                mode = 0;
            } else {
                if (i % 2 === 1) {
                    ret.push(code[i]);
                }
            }
        }
    }
    if (ret.length === 0){
        return "EMPTY"
    } else{
         return ret.join('');
    }

}