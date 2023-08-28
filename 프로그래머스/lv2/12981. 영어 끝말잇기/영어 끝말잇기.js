function solution(n, words) {
    var answer = [];
    let data = [words[0]];
    
    for(let i = 1; i < words.length; i++) {
        
        if(words[i].at(0) !== data[data.length - 1].at(-1)) {
            return [i % n + 1 , Math.floor(i / n) + 1]
        }
        
        else if (data.includes(words[i])) {
            return [i % n + 1 , Math.floor(i / n) + 1]
        }
        
        data.push(words[i])
        
    }

    return [0,0];
}