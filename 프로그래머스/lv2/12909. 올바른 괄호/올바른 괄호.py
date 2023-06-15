def solution(s):
    stack = []
    
    for 괄호 in s:
        if 괄호 == "(":
            stack.append(괄호)
        else:
            if not stack:
                return False
            stack.pop()
    return bool(not stack)
