import time
from itertools import combinations_with_replacement

start_time = time.time()

def find_all(sum_dig, digs):
  combinations = combinations_with_replacement([1,2,3,4,5,6,7,8,9], digs)
  nums = list(filter(lambda i: sum(i) == sum_dig, combinations))
  x = lambda i: int(''.join([str(j) for j in i]))
  return [len(nums), x(nums[0]), x(nums[-1])] if len(nums) > 0 else []

print(find_all(35, 9))
print(find_all(10,9))
print(find_all(84,4))
print(find_all(27,3))
print(find_all(35,6))

print("Process finished --- %s seconds ---" % (time.time() - start_time))

# def recur(A, k, out=[], i=0, a = []):
#   if len(out) == k:
#     a.append(out)
#     print(out)
#     return

#   for j in range(i, len(A)):
#     out.append(A[j])
#     recur(A, k, out, j, a)
#     out.pop()

#   return a

# A = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# k = 3
# print(recur(A, k))
# ans = filter(lambda x: sum(x) == 10, a)
#print(a)