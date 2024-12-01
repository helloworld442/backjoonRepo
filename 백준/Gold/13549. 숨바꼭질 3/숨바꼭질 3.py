import heapq

N , K = map(int , input().split(' '))

queue = []
heapq.heappush(queue, (0, N))

dist = [1e9] * 100001
dist[N] = 0

while queue:
    c , n = heapq.heappop(queue)

    if dist[n] < c:
        continue

    for item in (n + 1, n - 1, n * 2):
        if item < 0 or item > 100000:
            continue

        cost = c

        if item != n * 2:
            cost = c + 1
        
        if cost < dist[item]:
            dist[item] = cost
            queue.append((cost, item))

print(dist[K])