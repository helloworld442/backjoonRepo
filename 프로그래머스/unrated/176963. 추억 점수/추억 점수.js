//photo에 있는 배열들을 하나씩 꺼내면서 다음 과정을 수행합니다.
//꺼낸 배열의 원소들을 하나씩 꺼내면서 다음 과정을 수행합니다.
//만약 원소가 name에 있다면 그 인덱스에 해당하는 yearning에 값을 더합니다.
//만약 원소가 name에 없다면 해당 과정을 수행하지 않습니다.
//원소들을 다 돌고 나서 그 합을 answer에 push 합니다.


function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i < photo.length; i++) {
        let sum = 0;
        for(let j = 0; j < photo[i].length; j++) {
            let index = name.indexOf(photo[i][j])
            if(index !== -1) {
                sum += yearning[index]
            }
        }
        answer.push(sum)
    }
    return answer;
}