interface IUser {
	id: number;
	name: string;
	age: number;
}
let users: IUser[] = [];

let user1 = {
	id: 1,
	name: "Mr. Potato",
	age: 32,
};

let user2 = { id: 2, name: "Ms. Tomato", age: 21 };

users.push(user1);
users.push(user2);
// console.log(users);

const printUserInfo = (user: IUser) => {
	console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};
users.forEach((user) => printUserInfo(user));
