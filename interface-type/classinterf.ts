interface IUserFormatter {
    formatUser :() =>string
}
class User implements IUserFormatter {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	formatUser = () => {
		return `Name: ${this.name}, Age: ${this.age}`;
	};
}

let user =new User("Mr. Potato", 32);
console.log(user.formatUser());
