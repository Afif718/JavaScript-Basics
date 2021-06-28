var database = [

    { username: "Harry",
      password: "1234"

    },

     { username: "Afif",
      password: "9999"

    },

     { username: "hao",
      password: "787"

    }
    
]

var newsfeed = [

    { username: "Sofia",
      timeline: "Raspberry pi 0"
    },

 { username: "Anna",
      timeline: "Raspberry pi 3"
    },
 { username: "Lam",
      timeline: "Raspberry pi 4"
    }
]


//we will create a function to do the tasks inside of it


function isUserValid(user, pass){

for(var i= 0; i<database.length; i++){

if(database[i].username === user && database[i].password === pass){

return true;
}
}
return false;
}

function signIn(user, pass){
    console.log(isUserValid(user, pass));
}



// function signIn(user, pass){

//     if(user === database[0].username && pass === database[0].password){
//         console.log(newsfeed);
//     } else{
//         alert("Sorry! Wrong username or Password")
//     }
// }

//calling the function


//Firstly we will ask the user to enter his username and password

var userNamePrompt = prompt("Enter your username here: ");
var passwordPrompt = prompt("Enter you password here: ");


signIn(userNamePrompt, passwordPrompt);