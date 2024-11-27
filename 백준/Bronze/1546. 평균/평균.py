n = int(input())
arr = list(map(int, input().split()))
maxItem = max(arr)

sum = 0

for item in arr:
    sum += item / maxItem * 100

print(sum / n)