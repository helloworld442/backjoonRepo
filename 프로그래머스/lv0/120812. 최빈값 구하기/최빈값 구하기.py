def solution(array):
    arr = list(set(array))
    print(arr)
    board = [array.count(i) for i in arr]
    print(board)
    if board.count(max(board)) == 1:
        return arr[board.index(max(board))]
    return -1

