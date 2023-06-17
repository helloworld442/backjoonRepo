function solution(answers) {
    const one = [1,2,3,4,5]
    const two = [2, 1, 2, 3, 2, 4, 2, 5]
    const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const answer = [0,0,0]
    const ans = []
    for(i in answers) {
        if(answers[i] === one[i % one.length]) answer[0]++;
        if(answers[i] === two[i % two.length]) answer[1]++;
        if(answers[i] === thr[i % thr.length]) answer[2]++;
    }
    for(i in answer) {
        if (answer[i] == Math.max(...answer)) ans.push(Number(i)+1)
    }
    return ans;
}