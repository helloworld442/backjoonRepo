L = int(input())
s = input()

r , m = 31 , 1234567891
sum = 0


for i in range(L):
    sum += ((ord(s[i]) + 1) % 97) * (r ** i)

print(sum % m)