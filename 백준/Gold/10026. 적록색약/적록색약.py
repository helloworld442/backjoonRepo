from collections import deque

N = int(input())

graph = []

for _ in range(N):
    graph.append(list(input()))

que = deque()

dx = [1, -1 ,0 ,0]
dy = [0 ,0 ,-1 ,1]

def bfs_search(i , j):
    que.append((i , j))

    while que:
        x , y  = que.popleft()

        for i in range(4):
            nX = x + dx[i]
            nY = y + dy[i]

            if (nX < 0 or nX >= N) or (nY < 0 or nY >= N):
                continue
            
            if graph[nX][nY] == graph[x][y] and not visited[nX][nY]:
                visited[nX][nY] = True
                que.append((nX, nY))
        

cnt1 = 0

visited = [[False] * N for _ in range(N)]

for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs_search(i, j)
            cnt1 += 1

cnt2 = 0

for i in range(N):
    for j in range(N):
        if graph[i][j] == 'G':
            graph[i][j] = 'R'

visited = [[False] * N for _ in range(N)]

for i in range(N):
    for j in range(N):
        if not visited[i][j]:
            bfs_search(i, j)
            cnt2 += 1


print(cnt1, cnt2)