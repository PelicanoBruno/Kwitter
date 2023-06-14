
var userName = localStorage.getItem("Usuario")
var roomName = localStorage.getItem("Room")
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
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código
console.log(firebaseMessageId)
console.log(messageData)
var likes = messageData["like"]
var mensagem = messageData["mensagem"]
var nome = messageData["nome"]
var prepararNome ="<h4 id ='nome'>" + nome + "<img class='user_tick' src='tick.png'> </h4>"
var prepararMensagem ="<h4 class = 'message_h4'" + mensagem + "</h4>"
var linha = prepararNome + prepararMensagem
document.getElementById("output").innerHTML += linha
//Fim do código
 } });  }); }
getData();
function send(){
    var msg = document.getElementById("msg").value
    firebase.database().ref(roomName).push({
        nome : userName,
        mensagem : msg,
        like : 0
    })
}
