// let  user1: {name: string, id: number}
// user1 ={name: "John", id: 1}
// console.log(user1);

let users: object[];
users = [];

let user1: { name: string; id: number };
user1 = { name: "John", id: 1 };
users.push(user1);

let user2: { name: string; id: number };
user2 = { name: "dee", id: 5 };
users.push(user2);

for(const key in users){
    console.log(users[key]);
    
}
// console.log(users);
