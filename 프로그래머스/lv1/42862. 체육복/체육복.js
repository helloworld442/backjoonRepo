function solution(n, lost, reserve) {
    var answer = 0;
    let realLost=lost.filter((l)=>!reserve.includes(l));
    let realReserve=reserve.filter((r)=>!lost.includes(r));
    answer+=n-realLost.length;
    
    realLost.sort((a,b)=>a-b);
    
    realLost.forEach((val)=>{
        if(realReserve.length===0){
            return;
        }
        
        if(realReserve.includes(val-1)){
            realReserve=realReserve.filter((r)=>r!==val-1);
            answer++;
        }
        else if(realReserve.includes(val+1)){
            realReserve=realReserve.filter((r)=>r!==val+1);
            answer++;
        }
        
    })
    return answer;
}