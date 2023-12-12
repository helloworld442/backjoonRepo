from collections import Counter

sentence = input().lower()
sentence_dict = Counter([s for s in sentence])

key_list = [key for key , value in sentence_dict.items()]
value_list = [value for key, value in sentence_dict.items()]

max_value = max(value_list)

if(value_list.count(max_value) >= 2):
    print("?")
else:
    max_index = value_list.index(max(value_list))
    print(key_list[max_index].upper())



