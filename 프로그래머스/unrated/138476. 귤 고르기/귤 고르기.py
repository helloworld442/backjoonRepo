from collections import Counter
def solution(k, tangerine):
    answer = 0
    arr = Counter(tangerine).most_common()
    for val , idx in arr:
        if k <= 0: break
        k -= idx
        answer += 1
    return answer