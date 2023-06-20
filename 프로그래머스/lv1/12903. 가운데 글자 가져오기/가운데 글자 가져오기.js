function solution(s) {
    mid = s.length / 2;
    start = Math.floor(mid) - (1 ^ s.length % 2);
    end = Math.ceil(mid) + (1 ^ s.length % 2);
    return s.slice(start, end);
}