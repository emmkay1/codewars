let friends = [
	{
		username: 'David',
		status: 'online',
		lastActivity: 10
	},
	{
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22
	},
	{
		username: 'Bob',
		status: 'online',
		lastActivity: 104
	},
	{
		username: 'woll',
		status: 'online',
		lastActivity: 104
	}
];

const whosOnline1 = (friends) => {
	let obj = {};
	let online = [];
	let offline = [];
	let away = [];

	for (let { username, status, lastActivity } of friends) {
		if (status === 'online' && lastActivity <= 10) online.push(username);
		if (status === 'offline') offline.push(username);
		if (status === 'online' && lastActivity > 10) away.push(username);
	}

	if (online.length > 0) obj.online = online;
	if (offline.length > 0) obj.offline = offline;
	if (away.length > 0) obj.away = away;

	return obj;
};

const whosOnline2 = (friends) => {
	const obj = {};
	for (let { username, status, lastActivity } of friends) {
		const frndstatus = status === 'online' && lastActivity > 10 ? 'away' : status;
		obj[frndstatus] ? obj[frndstatus].push(username) : (obj[frndstatus] = [ username ]);
	}
	return obj;
};

function whosOnline3(friends) {
	return friends.reduce((acc, { username, status, lastActivity }) => {
		const frndstatus = status === 'online' && lastActivity > 10 ? 'away' : status;
		acc[frndstatus] ? acc[frndstatus].push(username) : (acc[frndstatus] = [ username ]);
		return acc;
	}, {});
}

console.log(whosOnline1(friends));
console.log(whosOnline2(friends));
console.log(whosOnline3(friends));
