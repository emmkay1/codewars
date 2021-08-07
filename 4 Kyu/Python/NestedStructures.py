def same_structure_as(original,other):
    if len(original) == len(other):
        for i in range(len(original)):
            if isinstance(original[i], list) and isinstance(other[i], list):
                same_structure_as(original[i], other[i])
                
            else:
                return type(original[i]) != type(other[i])

print(same_structure_as([[23,34, 54], 45],[[2, 4, 6], 55, 42]))