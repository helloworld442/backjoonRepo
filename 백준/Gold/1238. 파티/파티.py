import sys
import heapq
input = sys.stdin.readline

N , M , X = map(int , input().split(' '))

graph = [[] for _ in range(N + 1)]

for _ in range(M):
    s , e , t = map(int , input().split(' '))
    graph[s].append((e , t))




def dijkstra(start):
    times = [int(1e9) for _ in range(N + 1)]
    times[start] = 0
    
    queue = []
    heapq.heappush(queue , (0 , start))

    while queue:
        time , now = heapq.heappop(queue)

        if times[now] < time:
            continue

        for n_now , n_time in graph[now]:
            new_time = time + n_time

            if new_time < times[n_now]:
                times[n_now] = new_time
                heapq.heappush(queue , (new_time , n_now))

    return times

answer = dijkstra(X)
answer[0] = 0

for i in range(1, N + 1):
    if i != X:
        res = dijkstra(i)
        answer[i] += res[X]

print(max(answer))