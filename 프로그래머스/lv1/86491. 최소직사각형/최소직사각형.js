function solution(sizes) {
    var answer = 0;
    let w = 0,h = 0;
    sizes.map((size)=>{
        const [a,b] = size.sort((a,b)=>a-b)
        if(a > w) w = a
        if(b > h) h = b
    })
    
    return w*h;
}