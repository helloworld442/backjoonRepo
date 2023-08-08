def solution(s):
    s_dict = {}
    answer = []
    for i in range(len(s)):
        if(s[i] in s_dict):
            answer.append(i - s_dict[s[i]])
        else:
            answer.append(-1)
        s_dict[s[i]] = i
    return answer