function solution(num) {
    const arr = ["Even","Odd"];
    return arr[Math.abs(num) % 2];
}