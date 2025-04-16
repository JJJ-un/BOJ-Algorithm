function solution(my_string, overwrite_string, s) {
    var answer = '';
    // 문자열 이어붙이기는 그냥 더하기
    // 슬라이싱할때 slice() 쓰자
    // splice() 쓰는건?
    {/*
        let answer = [...my_string];
        answer.splice(s, overwrite_string.length, ...overwrite_string); // 전개 연산자 추가
        return answer.join('');
    
    
    */}
    
    const before = my_string.slice(0, s);
    const after = my_string.slice(s + overwrite_string.length);
    answer = before + overwrite_string + after
    return answer;
    
}