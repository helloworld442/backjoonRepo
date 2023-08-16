//score에 길이만큼 반복문을 돌면서 다음 과정을 수행한다.
//score에 길이에서 k번재 수 만큼은 계속 배열에 값을 넣는다.
//k+1번째 수 부터는 주어진 score의 값이 제일 못한 사람의 수보다 큰지 안큰지 확인한다
//만약 크다면 제일 작은 수를 빼고 큰수를 넣는다. 
//만약 작다면 제일 작은 수를 유지한다.
//배열 중에서 가장 작은 원소의 값을 answer에 넣는다.

function solution(k, score) {
    var answer = [];
    var dummy = []
    for(let i = 0; i < score.length; i++) {
        if(i < k) {
            dummy.push(score[i])
        }
        else {
            if(dummy[0] < score[i]) {
                dummy[0] = score[i]
            }
        }
        dummy = dummy.sort((a,b) => a-b)
        answer.push(dummy[0])
    }
    return answer;
}