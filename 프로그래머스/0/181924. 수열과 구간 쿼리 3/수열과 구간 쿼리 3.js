function solution(arr, queries) {
    queries.forEach((v) => {
        let k = arr[v[0]];
        arr[v[0]] = arr[v[1]];
        arr[v[1]] = k;
    });
    return arr; 
}