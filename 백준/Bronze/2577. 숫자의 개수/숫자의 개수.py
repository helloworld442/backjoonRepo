A = int(input())
B = int(input())
C = int(input())

result = A * B * C

result = str(result)

for i in range(0 , 10):
    count = result.count(str(i))
    print(count)