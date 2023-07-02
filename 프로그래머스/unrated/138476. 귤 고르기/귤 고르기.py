from collections import Counter
def solution(k, tangerine):
    answer = 0
    남는갯수 = len(tangerine) - k
    arr = sorted(Counter(tangerine).items(),key = lambda k : k[1])
    for val , idx in arr:
        if 남는갯수 < idx: break
        남는갯수 -= idx
        answer += 1
    return len(arr) - answer