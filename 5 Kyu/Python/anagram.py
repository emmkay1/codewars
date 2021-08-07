def anagrams(word, words):
    return list(filter(lambda i: (sorted(i) == sorted(word)), words))

print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'aaab']))
# array = ['aabb', 'abcd', 'bbaa', 'dada']

# print(list(filter(lambda i: i.find('d'), array)))
