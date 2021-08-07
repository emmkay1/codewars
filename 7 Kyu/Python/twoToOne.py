def longest(s1, s2):
  mix = s1 + s2 # combine both strings
  str = sorted(set(mix)) # remove duplicates using set then sort
  new_str = ''
  for letter in str: # iterate the sorted list and finally produce string in variable new_str
    new_str += letter
  return new_str