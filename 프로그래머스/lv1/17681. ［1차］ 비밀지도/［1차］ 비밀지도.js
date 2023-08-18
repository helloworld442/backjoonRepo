//n만큼 반복문을 돌면서 다음 과정을 수행한다.
//arr1 , arr2의 각 원소들을 이진수로 변환해준다.
//n만큼 반복문을 돌면서 다음 과정을 수행한다.
//각 이진수의 숫자들을 or연산자를 통해서 연산한다.
//연산결과 즉 0 => " " , 1 => "#"를 임의의 변수에 담는다.
//변수를 answer에 각각 담는다.
//answer를 리턴한다.

function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        let ans = ""
        for(let j = 0; j < n; j++) {
            let num1 = arr1[i].toString(2).padStart(n , 0)
            let num2 = arr2[i].toString(2).padStart(n , 0)
            if(num1[j] | num2[j]) ans += "#"
            else ans += " "
        }
        answer.push(ans)
    }
    return answer;
}