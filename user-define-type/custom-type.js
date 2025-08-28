// let  user1: {name: string, id: number}
// user1 ={name: "John", id: 1}
// console.log(user1);
var Users;
Users = [];
var User1;
User1 = { name: "John", id: 1 };
Users.push(User1);
var User2;
User2 = { name: "dee", id: 5 };
Users.push(User2);
var User3;
User3 = { name: "Kol", id: 6 };
Users.push(User3);
for (var key in Users) {
    console.log(Users[key]);
}
var getReqType;
getReqType = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
