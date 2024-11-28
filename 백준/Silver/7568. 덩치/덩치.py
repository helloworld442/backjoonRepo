N = int(input())

persons = []

for _ in range(N):
    w , h = map(int , input().split(" "))

    persons.append((w , h))



for person1 in persons:
    cnt = 1

    for person2 in persons:
        if person1[0] < person2[0] and person1[1] < person2[1]:
            cnt += 1
    
    print(cnt , end=" ")
