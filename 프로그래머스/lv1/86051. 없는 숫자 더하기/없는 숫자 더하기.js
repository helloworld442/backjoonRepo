function solution(numbers) {
    let sum = 45
    let sum2 = 0
    for(let i = 0; i < numbers.length; i++) {
        sum2 += numbers[i]
    }
    return sum - sum2;
}