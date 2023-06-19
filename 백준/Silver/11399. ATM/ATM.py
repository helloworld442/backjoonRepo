num = int(input())

li = list(map(int,input().split()))
hap = 0
li.sort()

for i in range(1,num+1):
    hap += sum(li[0:i])
print(hap)
