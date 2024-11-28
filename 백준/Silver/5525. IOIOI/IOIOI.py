N = int(input())
S = int(input())
M = list(input())

startP = 0
endP = 2 * N 

tM = "IOI" + "OI" * (N - 1)

cnt = 0

while endP < S:
    sL = M[startP : endP + 1]
    pM = ''.join(sL)

    if pM == tM:
        cnt += 1

        startP += 2
        endP += 2
    
    else:
        startP += 1
        endP += 1

print(cnt)

