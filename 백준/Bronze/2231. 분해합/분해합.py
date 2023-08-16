n = int(input())
for i in range(1,n+1):
    sum1 = sum(list(map(int,str(i))))
    total = i + sum1
    if n == total:
        print(i)
        break
else: #break 안걸림 -> 생성자가 없음
    print(0)