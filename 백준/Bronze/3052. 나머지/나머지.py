a = []

for i in range(10):
    n = int(input())
    a.append(n % 42)

a = list(set(a))

print(len(a))
