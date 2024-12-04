N , S = map(int , input().split(' '))

a = list(map(int , input().split(' ')))

INF = int(1e9)

sum = 0
len = INF
end = 0

for start in range(N):
    
    while sum < S and end < N:
        sum += a[end]
        end += 1

    if sum >= S:
        len = min(len , end - start)
    
    sum -= a[start]

print(len if len != INF else 0)