def unique_in_order(iterable):
    if len(iterable) == 0: return []
    unique = [iterable[i] for i in range(len(iterable) -1) if iterable[i] != iterable[i + 1]]
    unique.append(iterable[len(iterable) - 1])
    return unique

print(unique_in_order('ABBCcAD'))
print(unique_in_order([]))
print(unique_in_order([1,1,1,2,6,5]))