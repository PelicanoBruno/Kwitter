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

userName = localStorage.getItem("Usuario");

document.getElementById("usuario").innerHTML = "Bem-vindo(a) " + userName + "!";
function novaSala(){
  Room = document.getElementById("roomName").value
  firebase.database().ref("/").child(Room).update({
     adicionar:"Sala"
  })
  localStorage.setItem("Room",Room)
  window.location = "kwitterPage.html"
  }
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("roomName" + roomNames)
       linha = "<div class = 'roomName' id = " + roomNames + "onclick = 'irParaSala(this.id)'>" + roomNames + "</div><hr>"
      document.getElementById("output").innerHTML += linha
      });
  });

}
getData();
function irParaSala(name){
console.log(name)
localStorage.setItem("Room",name)
window.location = "kwitterPage.html"
}
function sair(){
localStorage.removeItem("Usuario")
localStorage.removeItem("roomName")
window.location = "index.html"
}
