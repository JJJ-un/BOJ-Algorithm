function solution(arr, n) {
    var answer = [];
    if(arr.length%2 == 0){
        for(var i=0; i<arr.length; i++){
            i%2===0 ? answer.push(arr[i]):answer.push(arr[i]+n)
        }
    } else {
        for(var i=0; i<arr.length; i++){
            i%2===0 ? answer.push(arr[i]+n):answer.push(arr[i])
        }
    }
    return answer;
}