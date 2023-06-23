#도시의 주요소 가격이 작으면 작을 수록 유리함
#만약 앞에 주요소가 뒤의 주요소보다 작으면 그걸로 대체
#아니면 그 지역에서만 충전
N = int(input())
way = list(map(int,input().split()))
gas = list(map(int,input().split()))
sum1 = 0
for i in range(N-1):
    if gas[i] < gas[i+1]:
        gas[i+1] = gas[i]
    sum1 += gas[i]*way[i]
print(sum1)