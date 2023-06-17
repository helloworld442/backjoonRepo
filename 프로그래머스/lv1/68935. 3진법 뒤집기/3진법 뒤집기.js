function solution(n) {
    let bin = n.toString(3);
    bin = bin.split("").reverse().join("")
    let num = parseInt(bin, 3)
    return num;
}