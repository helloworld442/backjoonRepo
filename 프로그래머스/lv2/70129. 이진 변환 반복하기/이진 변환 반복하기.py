#1. s가 "1"이 될 때까지 반복
#2. s에서 1의 카운트를 구한다.
#3. 2.의 숫자를 다시 2진수로 바꾸고 문자로 바꾼다.
#4. 3.의 문자를 s로 만든다.
def solution(s):
    cnt1, cnt2 = 0, 0
    while s != '1':
        cnt1 += s.count("0")
        s = format(s.count("1"), 'b')
        cnt2 += 1
    return [cnt2,cnt1]