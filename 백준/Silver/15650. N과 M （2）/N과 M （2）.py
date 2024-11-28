N , M = map(int , input().split(" "))

nums = [n for n in range(1 , N + 1)]

depth = 0
perm = []

def permutation(start , depth):
    if depth == M:
        print(' '.join(perm))
        return
    
    for i in range(start , N):
        perm.append(str(nums[i]))
        permutation(i + 1, depth + 1)
        perm.pop()

permutation(0, depth)



