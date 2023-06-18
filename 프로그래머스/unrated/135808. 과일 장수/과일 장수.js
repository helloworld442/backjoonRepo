function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a)
    for(let i = 0; i < parseInt(score.length / m); i++ ) {
        answer += m*Math.min(...score.slice(m*i,m*i+m))
    }
    return answer;
}