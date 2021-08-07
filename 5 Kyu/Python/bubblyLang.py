start = lambda fn: fn([])
end = lambda stack: stack.pop()
push = lambda stack: lambda num: lambda fn: fn(stack + [num])
add = lambda stack: lambda fn: fn(stack[:-2] + [stack[-1] + stack[-2]])
sub = lambda stack: lambda fn: fn(stack[:-2] + [stack[-1] - stack[-2]])
mul = lambda stack: lambda fn: fn(stack[:-2] + [stack[-1] * stack[-2]])
div = lambda stack: lambda fn: fn(stack[:-2] + [stack[-1] // stack[-2]])

print(
	start(push)(5)(push)(3)(add)(push)(2)(push)(5)(div)(push)(3)(push)(8)(mul)(mul)(push)(4)(push)(9)(div)(push)(5)(
		push
	)(8)(push)(1)(add)(add)(push)(3)(push)(5)(sub)(push)(8)(push)(9)(push)(3)(mul)(mul)(push)(1)(push)(1)(add)(push)(2)(
		add
	)(push)(55)(push)(28)(push)(24)(div)(add)(push)(86)(sub)(push)(13)(push)(38)(push)(70)(push)(96)(add)(push)(84)(
		add
	)(mul)(div)(mul)(push)(37)(div)(push)(35)(sub)(push)(19)(sub)(push)(2)(push)(31)(push)(87)(add)(push)(63)(div)(div)(
		push
	)(47)(push)(12)(mul)(add)(mul)(push)(58)(push)(60)(add)(push)(68)(add)(div)(push)(7)(push)(79)(push)(9)(sub)(push)(
		93
	)(push)(81)(push)(45)(mul)(mul)(sub)(sub)(add)(end)
)

print(start(push)(38)(push)(37)(mul)(push)(48)(add)(push)(44)(sub)(push)(76)(div)(push)(1)(mul)(push)(76)(mul)(push)(10)(
		push
	)(16)(push)(69)(push)(7)(push)(28)(add)(push)(1)(push)(89)(push)(35)(sub)(push)(35)(push)(11)(div)(push)(16)(mul)(
		div
	)(push)(8)(add)(sub)(add)(push)(46)(add)(mul)(add)(push)(57)(mul)(push)(65)(add)(sub)(mul)(push)(98)(sub)(push)(66)(
		push
	)(65)(push)(29)(mul)(div)(mul)(end))

print(start(push)(90)(push)(48)(push)(26)(div)(push)(32)(push)(82)(push)(37)(div)(sub)(push)(49)(push)(79)(push)(41)(
		push
	)(96)(push)(33)(mul)(add)(push)(78)(push)(73)(push)(60)(push)(74)(mul)(push)(15)(mul)(div)(add)(push)(76)(push)(52)(
		div
	)(add)(add)(mul)(mul)(push)(52)(sub)(push)(59)(push)(45)(push)(71)(add)(div)(sub)(mul)(push)(80)(push)(74)(add)(
		push
	)(59)(sub)(push)(56)(push)(25)(push)(30)(push)(47)(mul)(div)(mul)(div)(add)(sub)(mul)(end))

print(start(push)(51)(push)(90)(push)(8)(sub)(sub)(push)(24)(mul)(push)(92)(push)(49)(mul)(sub)(push)(55)(push)(52)(sub)(
		push
	)(7)(push)(98)(sub)(push)(9)(push)(58)(div)(push)(45)(push)(4)(sub)(push)(73)(push)(41)(add)(push)(15)(push)(53)(
		div
	)(div)(push)(22)(push)(72)(sub)(sub)(mul)(push)(29)(mul)(sub)(div)(sub)(push)(12)(mul)(sub)(push)(74)(div)(push)(
		70
	)(sub)(push)(86)(push)(24)(push)(54)(mul)(mul)(add)(end))