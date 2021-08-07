def friend(x=[]):
  actual_friends = []
  for friend in x:
    if len(friend) == 4:
      actual_friends.append(friend)
  return actual_friends