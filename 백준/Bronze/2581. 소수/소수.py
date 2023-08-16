N = int(input())
M = int(input())
cnt = 0
data = []
for i in range(N,M+1):
    for j in range(1,i+1):
        if i % j == 0:
            cnt += 1
    if cnt == 2:
        data.append(i)
    cnt = 0
if len(data) == 0:
    print(-1)
else:
    print(sum(data))
    print(data[0])