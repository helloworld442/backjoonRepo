//1~number까지의 반복문을 돌면서 다음 과정을 수행한다.
//각 단계마다 약수의 갯수를 구한다.
//약수의 갯수가 limit를 넘는지 아닌지를 확인한다.
//만약 약수의 갯수가 limit를 넘는다면 power를 answer에 더한다.
//만약 약수의 갯수가 limit를 넘지 않는다면 약수의 갯수를 answer에 더한다.
//answer를 리턴한다.

function 약수갯수함수(num) {
    let result = 0
    for(let i = 1; i*i <= num; i++) {
        if(i * i == num) result++;
        else if(num % i == 0) result += 2
    }
    return result;
}

function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++) {
        let len = 약수갯수함수(i)
        if(len <= limit) answer += len
        else answer += power
    }
    return answer;
}