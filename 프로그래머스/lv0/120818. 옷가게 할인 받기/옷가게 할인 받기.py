def solution(price):
    rates = {500000: 0.8, 300000: 0.9, 100000: 0.95, 0: 1}
    for price2, rate in rates.items():
        if price >= price2:
            return int(price * rate)