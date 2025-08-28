// let  user1: {name: string, id: number}
// user1 ={name: "John", id: 1}
// console.log(user1);

let Users: object[];
Users = [];
type User =  { name: string; id: number }

let User1: User;
User1 = { name: "John", id: 1 };
Users.push(User1);

let User2: User;
User2 = { name: "dee", id: 5 };
Users.push(User2);

let User3: User;
User3 = { name: "Kol", id: 6 };
Users.push(User3);

for (const key in Users) {
	console.log(Users[key]);
}

type RequestType = "GET" | "POST";
let getReqType : RequestType;
getReqType = "GET";


function requestHandler(requestType : RequestType) {
   console.log(requestType);
   
}
requestHandler("GET");