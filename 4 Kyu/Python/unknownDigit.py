import re
def solve_Expression(exp):
  # nums = list(filter(lambda e: e not in re.findall('\d', exp), [str(i) for i in range(0,10)]))
  opd, r = exp.split('='), lambda i,j: i.replace('?', f'{j}')
  for e in sorted(set('0123456789') - set(exp)):
    if str(eval(re.sub(r'\b0+(?!\b)', '', r(opd[0],e)))) == r(opd[1], e): return e
  return -1

print(solve_Expression('1+1=?')); # 2
print(solve_Expression('123*45?=5?088')); # 6
print(solve_Expression('-5?*-1=5?')); # 0
print(solve_Expression('19--45=5?')); # -1
print(solve_Expression('??*??=302?')); # 5
print(solve_Expression('?*11=??')); # 2
print(solve_Expression('??*1=??')); # 2
print(solve_Expression('??-??=??')); # -1
print(solve_Expression('?20132-34141?=47?717')); # -1
print(solve_Expression('?38???+595???=833444')) # 2