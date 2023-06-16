function solution(arr) {
    var answer = arr.reduce((a,b)=>a+b,0);
    return answer / arr.length;
}