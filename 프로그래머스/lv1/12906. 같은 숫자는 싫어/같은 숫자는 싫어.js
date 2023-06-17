function solution(arr)
{
    let stack = []
    for (a of arr) {
        if(stack[stack.length - 1] !== a) stack.push(a)
    }
    return stack;
}