function solution(nums) {
    let numLen = nums.length / 2
    let setNums = [...new Set(nums)]
    answer = setNums.slice(0,numLen).length
    return answer;
}