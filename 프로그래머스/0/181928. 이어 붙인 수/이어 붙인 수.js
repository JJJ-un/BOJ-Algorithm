function solution(num_list) {
    var a =[]
    var b = []
    var answer = []
    for(let i = 0; i<num_list.length; i++){
        num_list[i]%2 === 0 ?  a.push(num_list[i]) : b.push(num_list[i])   
    }
    answer = Number(a.join(""))+Number(b.join(""))
    return answer

}