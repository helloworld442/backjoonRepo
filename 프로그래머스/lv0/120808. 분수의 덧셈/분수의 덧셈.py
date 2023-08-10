def gcd(a, b):
    if a % b == 0:
        return b
    return gcd(b, a % b)

def solution(numer1, denom1, numer2, denom2):
    boonmo = denom1 * denom2
    boonja = numer1 * denom2 + numer2 * denom1
    
    gcd_value = gcd(boonmo, boonja)
    
    answer = [boonja / gcd_value, boonmo / gcd_value]
    return answer