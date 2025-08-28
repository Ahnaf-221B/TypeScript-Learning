enum requestType {
	readData=1,
	saveData=5,
	deleteData,
}
console.log(requestType);
console.log(requestType.readData);

enum requestType2 {
    readData = 'Read_data',
    deleteData = 'Delete_data',
}

console.log(requestType2.deleteData);

enum requestType3 {
	readData = "Read_data",
	deleteData = "Delete_data",
    id= 4
}

console.log(requestType3); 
