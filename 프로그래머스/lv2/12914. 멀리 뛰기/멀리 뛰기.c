#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(int n) {
    long long ary[n];
    long long answer = 0;
    ary[0] = 1;
    ary[1] = 1;
    for(int i = 2; i <= n; i++){
        ary[i] = (ary[i-2] + ary[i-1]) %1234567;
    }
    answer = ary[n];
    return answer;
}