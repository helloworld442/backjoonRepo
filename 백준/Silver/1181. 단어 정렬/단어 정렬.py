N = int(input())
arr = [input() for _ in range(N)]

answer = list(set(arr))
answer.sort()
answer.sort(key=len)

for item in answer:
    print(item)


