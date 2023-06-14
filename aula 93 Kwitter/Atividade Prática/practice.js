
var Username = ""
const firebaseConfig = {
    apiKey: "AIzaSyDSqwOUY0g2WVtYUz5LKM27uhJ9sF7tNO4",
    authDomain: "kwitter-ed7b9.firebaseapp.com",
    databaseURL: "https://kwitter-ed7b9-default-rtdb.firebaseio.com",
    projectId: "kwitter-ed7b9",
    storageBucket: "kwitter-ed7b9.appspot.com",
    messagingSenderId: "958833195760",
    appId: "1:958833195760:web:be5d0cd8c616c9a535e035"
  };
  firebase.initializeApp(firebaseConfig);
function addUser(){
Username = document.getElementById("username").value
firebase.database().ref("/").child(Username).update({
   adicionar:"usuario"
})
}
