function solution(t, p) {
    var answer = 0;
    let i = 0;
    while(i + p.length <= t.length) {
        let target = t.slice(i , i + p.length);
        if(target <= p) answer ++;
        i++;
    }
    return answer;
}