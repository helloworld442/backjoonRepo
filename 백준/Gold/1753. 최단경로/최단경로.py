import sys
import heapq

input = sys.stdin.readline

V , E = map(int , input().split(' '))
K = int(input())

graph = [[] for _ in range(V + 1)]

for _ in range(E):
    u , v , w = map(int , input().split(' '))
    graph[u].append((v , w))



INF = int(1e9)
distances = [INF] * (V + 1)

def dijkstra(K):
    distances[K] = 0
    q = []
    
    heapq.heappush(q , (0, K))

    while q:
        dist , now = heapq.heappop(q)
        
        if distances[now] < dist:
            continue
        
        for n_now , n_dist in graph[now]:
            cost = dist + n_dist
            
            if cost < distances[n_now]:
                distances[n_now] = cost
                heapq.heappush(q , (cost, n_now))
    
    
dijkstra(K)


for distance in distances[1:]:
    print(distance if distance < INF else 'INF')