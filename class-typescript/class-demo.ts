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

let user1 = new User("John", 25);
user1.display();
