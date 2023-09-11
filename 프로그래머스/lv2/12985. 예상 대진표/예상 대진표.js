//A와 B가 같을 때까지 다음 과정을 수행한다.
//A와 B를 2로 나눈다.
//나눈 값을 반올림한다.
//answer를 하나 올린다.
//answer를 리턴한다.

function solution(n,a,b) {
    var answer = 0;
    
    while(a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    
    return answer;
}