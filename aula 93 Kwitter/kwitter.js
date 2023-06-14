function login(){
    var nome = document.getElementById("input").value
    console.log(nome)
    localStorage.setItem("Usuario", nome)
    window.location = "kwitterRoom.html"
}
