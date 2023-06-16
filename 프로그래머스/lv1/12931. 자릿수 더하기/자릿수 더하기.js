function solution(n)
{
    n = Array.from(String(n))
    answer = n.reduce((a,b)=>Number(a)+Number(b),0)
    return answer;
}