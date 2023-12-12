first = int(input())

second = input()

for num in reversed(second):
    sum_num = first * int(num)
    print(sum_num)

print(first * int(second))
