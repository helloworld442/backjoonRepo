function solution(x, n) {
    var answer = [];
    let st = x
    for(let i = 0;i<n; i++) {
        answer.push(x)
        x += st
    }
    return answer;
}