function solution(a, b) {
    // 정수를 문자로 다룰때는 주의 
    k = String(a) + String(b)
    p = String(b) + String(a)
    return (
        k > p ? Number(k) : Number(p)
    
    )
 
}