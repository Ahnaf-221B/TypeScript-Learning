class User {
	userName: String;
	age: number;

	constructor(userName: string, age: number) {
		this.userName = userName;
		this.age = age;
	}
	display(): void {
		console.log(`${this.userName} is ${this.age} years old`);
	}
}

class student extends User {
	studentId: number;
	constructor(userName: string, age: number, studentId: number) {
		super(userName, age);
		this.studentId = studentId;
	}

	display(): void {
		console.log(`${this.userName} is ${this.age} years old and his student id is ${this.studentId}`);
	}
}

let student1 = new student ("Rahim",22, 4376437483)
student1.display()
