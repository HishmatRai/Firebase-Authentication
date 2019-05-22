let input = document.getElementById("input");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let divd = document.getElementById("divd");

const dataBase = firebase.database().ref(`/`);

 btn.addEventListener('click', ()=>{
    
        
    let obj = {
        name : input.value,
        password : password.value
    }
    firebase.auth().createUserWithEmailAndPassword(obj.name, obj.password)
    .then((res)=>{
dataBase.child(`user/${res.user.uid}`).set(obj);
    window.location.href = './Login/login.html'

console.log(res);


    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode)
        // divd.innerHTML = errorMessage;
        divd.innerHTML = "Enter Correct Email & Password"
      });
   
 }
 )

 
