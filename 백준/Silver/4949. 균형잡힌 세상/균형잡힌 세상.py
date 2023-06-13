import sys

while True:
    stack = []
    괄호_dict = {
        ')' : '(',
        ']' : '[',
    }
    success = True
    string = sys.stdin.readline().rstrip()
    if string == ".":
        break
    for str in string:
        if str in 괄호_dict:
            if stack and stack[-1] == 괄호_dict[str]:
                stack.pop()
            else:
                print('no')
                break
        elif str == '(' or str == '[':
            stack.append(str)
    else:
        if stack:
            print('no')
        else:
            print('yes')