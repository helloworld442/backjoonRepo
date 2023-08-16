A,B,V = map(int,input().split())
k = (V-B) % (A-B)
if k == 0: #k의 나머지가 없음
    print ((V-B) // (A-B))
else: #k의 나머지가 있음
    print ((V-B) // (A-B) + 1)