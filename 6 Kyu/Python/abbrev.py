import re
def abbreviate(s):
    split_string = re.split('(_|\d|\W|\s)', s)
    abbrev = list(map(lambda x: f'{x[0]}{len(x[1:-1])}{x[-1]}' if len(x) >= 4 else x , split_string))
    return ('').join(abbrev)

print(abbreviate("double-barreled_double-barreled5cat. sits"))