//dartResult를 하나씩 돌면서 다음 과정을 수행한다.
//먄약 입력값이 숫자라면 해당 숫자를 배열에 저장한다.
//만약 입력값이 S , D , T중 하나라면 배열에 넣은 값을 S , D , T에 따라서 처리한다.
//만약 입력값이 * , #중 하나라고 하면 배열에 넣은 값 그리고 그 전에 값에 영향을 준다.
//배열의 모든 값들을 더한 값을 리턴한다.

function solution(dartResult) {
    var answer = 0;
    let dummy = []
    let bounce = ["S" , "D" , "T"]
    dartResult = dartResult.split(/([*#SDT])/);
    
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i]) && dartResult[i] !== "") {
            dummy.push(Number(dartResult[i]))
        }
        
        else if(bounce.includes(dartResult[i])) {
            dummy[dummy.length - 1] = dummy[dummy.length - 1] ** (bounce.indexOf(dartResult[i]) + 1)
        }
        
        else if(dartResult[i] === "#") {
            dummy[dummy.length - 1] = -1 * dummy[dummy.length - 1]
        }
        
        else if(dartResult[i] === "*") {
            dummy[dummy.length - 1] = dummy[dummy.length - 1] * 2
            dummy[dummy.length - 2] = dummy[dummy.length - 2] * 2
        }
    }
    
    answer = dummy.reduce((a ,b ) => a + b , 0)
    return answer;
}