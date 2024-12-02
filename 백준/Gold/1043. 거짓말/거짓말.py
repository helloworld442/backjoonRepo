N , M = map(int , input().split(' '))

k_set = set(input().split()[1:])

p_list = []

for _ in range(M):
    p_list.append(set(input().split()[1:]))
    
for _ in range(M):
    for p in p_list:
        if p & k_set:
            k_set = k_set.union(p)

cnt = 0

for p in p_list:
    if p & k_set:
        continue

    cnt += 1

print(cnt)
    
