function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0,cnt2 = 0
    let loc = [6,6,5,4,3,2,1]
               
               
    for(lotto of lottos) {
        if(!lotto) cnt2++;
        else if(win_nums.includes(lotto)) cnt++;
    }
    return [loc[cnt + cnt2],loc[cnt]]
}