N = int(input())

node = []

for _ in range(N):
    r , g , b = map(int , input().split(' '))
    node.append([r, g, b])


for i in range(1 , N):
    node[i][0] = min(node[i - 1][1] , node[i - 1][2]) + node[i][0]
    node[i][1] = min(node[i - 1][0] , node[i - 1][2]) + node[i][1]
    node[i][2] = min(node[i - 1][0] , node[i - 1][1]) + node[i][2]

print(min(node[N - 1]))