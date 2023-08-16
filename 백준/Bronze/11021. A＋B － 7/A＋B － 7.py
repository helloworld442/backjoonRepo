N = int(input())
data = []
for _ in range(N):
    a,b = map(int,input().split())
    data.append(a+b)
for i in range(N):    
    print("Case #{}: {}".format(i+1,data[i]))