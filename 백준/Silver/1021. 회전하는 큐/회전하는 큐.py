from collections import deque
import sys
N,M = map(int,sys.stdin.readline().split())
numList = list(map(int,sys.stdin.readline().split()))
que = deque([n + 1 for n in range(N)])
cnt = 0
for num in numList:
    while que[0] != num:
        if que.index(num) <= len(que) // 2:
            que.append(que.popleft())
        elif que.index(num) > len(que) // 2:
            que.insert(0,que.pop())
        cnt += 1
    que.popleft()
print(cnt)