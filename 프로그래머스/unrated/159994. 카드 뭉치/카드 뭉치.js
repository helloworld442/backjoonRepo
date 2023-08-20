// //cards1에서 원소를 하나뽑는다.
// //cards2에서 원소를 하나뽑는다.
// //만약에 cards1에서 원소가 goal에서의 원소와 같을 때 다음 과정을 수행한다.
// //goal의 원소의 값을 하나 제거한다.
// //cards2와는 비교하지 않는다.
// //만약에 cards2에서 원소가 goal에서의 원소와 같을 때 다음 과정을 수행한다.
// //goal의 원소의 값을 하나 제거한다.
// //cards1와는 비교하지 않는다.

// function solution(cards1, cards2, goal) {
//     let card1Idx = 0;
//     let card2Idx = 0;
//     let goalIdx = 0;
//     for (let i = 0; i < cards1.length + cards2.length; i++) {
//         if (cards1[card1Idx] === goal[goalIdx]) {
//             card1Idx += 1;
//             goalIdx += 1
//         }
//         else if (cards2[card2Idx] === goal[goalIdx]) {
//             card2Idx += 1;
//             goalIdx += 1;
//         }
//         else {
//             return "No";
//         }
        
//     }
    
    
//     return "Yes";
// }

function solution(cards1, cards2, goal) {
    let goalIdx = 0

    while(goalIdx !== goal.length){
        if(cards1[0] === goal[goalIdx]){
            cards1.shift()
            goalIdx++
        }
        else if(cards2[0] === goal[goalIdx]){
            cards2.shift()
            goalIdx++
        }
        else{
            return "No";
        }
    }

    return "Yes"
}