let userId:number;
let firstName:string;
let lastName: string;
let fullName: string;
let isActive: boolean;


userId= 101;
firstName= "GeekyShows";
lastName= "Technologies";  
fullName = firstName.concat(" "+lastName); 
isActive= true;
console.log(`${userId} ${fullName} ${isActive}`);
console.log(fullName.split(' '));
