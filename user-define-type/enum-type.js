var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 1] = "readData";
    requestType[requestType["saveData"] = 5] = "saveData";
    requestType[requestType["deleteData"] = 6] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.readData);
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "Read_data";
    requestType2["deleteData"] = "Delete_data";
})(requestType2 || (requestType2 = {}));
console.log(requestType2.deleteData);
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "Read_data";
    requestType3["deleteData"] = "Delete_data";
    requestType3[requestType3["id"] = 4] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
