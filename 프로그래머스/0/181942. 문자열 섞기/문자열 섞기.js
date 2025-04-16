function solution(str1, str2) {
    let answer = '';

    const maxLen = Math.max(str1.length, str2.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < str1.length) answer += str1[i];
        if (i < str2.length) answer += str2[i];
    }

    return answer;
}