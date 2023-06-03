n = int(input())

def combinelation(n):
    sum = 1
    for i in range(1, n + 1):
        sum *= i
    return sum
for _ in range(n):
    N,M = list(map(int,input().split()))
    print(combinelation(M) // (combinelation(M-N) * combinelation(N)))