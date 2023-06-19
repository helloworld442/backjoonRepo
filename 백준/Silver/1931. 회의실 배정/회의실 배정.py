#끝나는 시간이 빨라야지 많은 사람들을 우겨넣을 수 있음
#끝나는 시간이 빠른데로 데이터를 정렬
#끝나는 시간보다 조금 큰 시간을 다음 타켓으로 함


N = int(input())
data = []
for _ in range(N):
    a,b = map(int,input().split())
    data.append((a,b))
data.sort(key=lambda x : (x[1],x[0]))
first = 0
cnt = 0
for f,b in data:
    if first <= f:
        first = b
        cnt += 1
print(cnt)