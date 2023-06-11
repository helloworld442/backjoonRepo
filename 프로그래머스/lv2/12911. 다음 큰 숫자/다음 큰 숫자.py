def solution(n):
    answer = n + 1
    while True:
        targetCnt = bin(n).count('1')
        goalCnt = bin(answer).count('1')
        if targetCnt == goalCnt:
            break
        answer += 1
    return answer