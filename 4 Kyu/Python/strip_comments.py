import re
def solution(string,markers):
    if len(markers) == 0: return string
    
    pattern = '[' + re.escape(''.join(markers)) + ']'
    strip_text = []
    split_up = string.split('\n')
    
    for x in range(len(split_up)):
        strip_text.append(re.split(pattern, split_up[x])[0].strip())
        
    return '\n'.join(strip_text)

#%% 
