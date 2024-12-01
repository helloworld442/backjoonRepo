import sys

A , B , C = map(int , sys.stdin.readline().split())

def fpow(a , n):
    if n == 1:
        return a % C
    
    elif n % 2 == 0:
        half_c = fpow(a , n // 2)

        return (half_c * half_c) % C
    else:
        half_c = fpow(a , (n - 1) // 2)

        return (half_c * half_c * a) % C

print(fpow(A , B))