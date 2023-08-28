function solution(numbers, hand) {
    var answer = '';
    let numbersIndex = {
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        0 : [3,1],
        "*" : [3,0],
        "#" : [3,2],
    };
    let left = [1,4,7]
    let right = [3,6,9]
    let leftHand = "*";
    let rightHand = "#";
    
    for(let i = 0; i < numbers.length; i++) {
        if(left.includes(numbers[i])) {
            answer += "L"
            leftHand = numbers[i]
        }
        
        else if (right.includes(numbers[i])) {
            answer += "R"
            rightHand = numbers[i]
        }
        
        else {
            let r = numbersIndex[rightHand]
            let l = numbersIndex[leftHand]
            let c = numbersIndex[numbers[i]]
            
            let rDistance = Math.abs(c[0] - r[0]) + Math.abs(c[1] - r[1])
            let lDistance = Math.abs(c[0] - l[0]) + Math.abs(c[1] - l[1])
            
            if(rDistance > lDistance) {
                answer += "L";
                leftHand = numbers[i]
            }
                
            else if(rDistance < lDistance) {
                answer += "R";
                rightHand = numbers[i]
            }
            
            else {
                if(hand === "right") {
                    answer += "R";
                    rightHand = numbers[i]
                }
                
                else {
                    answer += "L";
                    leftHand = numbers[i]
                }
                
            }
            
            
        }
    }
    
    
    return answer;
}