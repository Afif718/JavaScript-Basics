
//object 
// var userInfo = {
// 	username: "Jhon",
// 	password: "!@#$"
// };

var database = [
{
    username: "Jhon",
	password: "1234"
	}
]

//created an arry and inside the array we have created two objects
var newsFeed = [
{
	username: "Jhon",
	timeLine: "Run run"
},
{
	username: "Anna",
	timeLine: "REad"
},
{
	username: "Belly",
	timeLine: "SLeep"
}

];


var userNameP = prompt("Enter ur user Name");
var passwordP = prompt("Enter your password here");

function signIn(userNameP, passwordP){
if(userNameP === database[0].username &&
 passwordP ===database[0].password){

	return console.log(newsFeed[0]);
} else{
	return console.log("You have enterd wrong username or password");
}
}

signIn(userNameP, passwordP);