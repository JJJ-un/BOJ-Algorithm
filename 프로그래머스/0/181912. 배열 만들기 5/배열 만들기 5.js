function solution(intStrs, k, s, l) {

    var answer = [];
    for ( let i =0; i<intStrs.length; i++){
        p = intStrs[i].slice(s, s + l);
        if ( Number(p) > k){
            answer.push(Number(p))
        }
        
    }
    return answer;
}