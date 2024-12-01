N = int(input())
arr = list(map(int , input().split(' ')))

pArr = [1] * N

for i in range(1, N):
    for j in range(i):
        if arr[i] > arr[j]:
            pArr[i] = max(pArr[i], pArr[j] + 1)

print(max(pArr))