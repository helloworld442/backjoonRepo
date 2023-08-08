//query의 길이 만큼 돌면서 다음 과정을 수행한다.
//query[i] 가 홀수 일때의 과정
//arr에서 query[i]보다 큰 인덱스 부터 자른다.
//query[i] 가 짝수 일때의 과정
//arr에서 query[i]보다 작은 인덱스 부터 자른다.
function solution(arr, query) {
    for(let i = 0 ; i < query.length ; i ++) {
        if(i%2 === 0) {
            temp = arr.slice(0,query[i] + 1)
        } else {
             temp = arr.slice(query[i])
        }
        arr = [...temp]
    }
    
    return arr
}
