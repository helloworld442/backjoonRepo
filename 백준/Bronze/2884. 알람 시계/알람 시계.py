a ,b = map(int,input().split())
if b - 45 >= 0:
    b -= 45
else:
    a = (23+a) % 24
    b = 60-(45-b)
print(a,b)