function solution(N, stages) {
    let stageLen = stages.length
    let arr = [];
    for(let i = 1; i <= N;i++) {
        num = stages.filter((val)=> val===i).length;
        arr.push([i,num / stageLen])
        stageLen -= num
    }
    arr.sort((a,b)=>b[1]-a[1])
    arr = arr.map((val)=>val[0])
    return arr;
}