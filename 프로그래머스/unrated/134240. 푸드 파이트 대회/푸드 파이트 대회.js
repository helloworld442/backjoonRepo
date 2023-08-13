function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i++) {
        let result = parseInt(food[i] / 2)
        answer += i.toString().repeat(result)
    }
    return answer + "0" + answer.split("").reverse().join("");;
}