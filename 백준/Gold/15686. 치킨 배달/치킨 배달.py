import sys
from itertools import combinations

input = sys.stdin.readline

N , M = map(int , input().split(' '))

tmp = []

for _ in range(N):
    tmp.append(list(map(int , input().split(' '))))

house = []
chick = []
result = 999999

for i in range(N):
    for j in range(N):
        if tmp[i][j] == 1:
            house.append((i, j))
        elif tmp[i][j] == 2:
            chick.append((i, j))

for c in combinations(chick , M):
    dist = 0            
    for h in house: 
        chi_len = 999   
        for j in range(M):
            chi_len = min(chi_len, abs(h[0] - c[j][0]) + abs(h[1] - c[j][1]))
        dist += chi_len
    result = min(result, dist)

print(result)