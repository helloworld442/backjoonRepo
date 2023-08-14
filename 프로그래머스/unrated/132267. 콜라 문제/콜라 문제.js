//주어진 콜라가 다 떨어질 때까지 반복
//주어진 콜라를 b만큼 나눈 다음에 그 나눈 몫을 저장
//주어진 콜라를 b만큼 나눈 다음에 그 나눈 나머지를 저장
//몫을 다시 주어진 콜라로 전환

function solution(a, b, n) {
    var answer = 0;
    while(n >= a) {
        let 몫 = Math.floor(n / a)
        let 나머지 = n % a
        n = 몫 * b + 나머지
        answer += 몫 * b
    }
    return answer;
}