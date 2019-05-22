let email = document.getElementById("email");
let password =  document.getElementById("password");
let btn = document.getElementById("btn");
const database =  firebase.database().ref('/')


btn.addEventListener('click',()=>{
let obj = {
    name : email.value,
    password : password.value
}
firebase.auth().signInWithEmailAndPassword(obj.name, obj.password)
.then((res)=>{
window.location.href = './../extra/extra.html'
alert("right")
console.log(res);


})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)
    // ...
  });

})
