function solution(a, b) {
    k = String(a) + String(b)
    p = 2*a*b
    return(
        Number(k) >= p ? Number(k):p
        )
}