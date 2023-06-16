function solution(a, b) {
    var answer = 0;
    mid = (a+b) / 2
    distance = Math.abs(b-a) + 1
    return distance * mid;
}