import sys

input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

n = int(input())

graph = [[] for _ in range(n + 1)]


for _ in range(n - 1):
    p , c , w = map(int , input().split(' '))

    graph[p].append((c , w))
    graph[c].append((p , w))



visited = [-1] * (n + 1)

def dfs(st , dist):
    for node , n_dist in graph[st]:
        if visited[node] == -1:
            visited[node] = n_dist + dist

            dfs(node , visited[node])

dfs(1 , 0)

max_visited_index = visited.index(max(visited))

visited = [-1] * (n + 1)

visited[max_visited_index] = 0

dfs(max_visited_index , 0)

print(max(visited))