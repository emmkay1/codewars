def ROT13(message):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    string = message
    for char in message:
        sub = alphabet.find(char)
        if char >= 'a' and char <= 'm':
            string = string.replace(char, alphabet[sub+13])
        elif char >= 'n' and char <= 'z':
            string = string.replace(char, alphabet[sub-13])
    return string

print(ROT13('EBG13 rknzcyr.'))