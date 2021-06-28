var database = [
{
    username: "Jhon",
	password: "1234"
	},

    {
    username: "Anna",
	password: "12"
	}, 

    {
    username: "Sally",
	password: "1"
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
	username: "Sally",
	timeLine: "SLeep"
}

];


var userNameP = prompt("Enter ur user Name");
var passwordP = prompt("Enter your password here");

//to check the user validity


function isUserValid(userNameP, passwordP){

	for(var i= 0; i<database.length; i++){

		if(database[i].username === userNameP &&
			database[i].password === passwordP){


			return true;
		}
	} return false;
}


function signIn(userNameP, passwordP){

	if(isUserValid(userNameP, passwordP)){
		console.log(newsFeed);
	} else{

alert("Wrong username and password");
	}
}



signIn(userNameP, passwordP);