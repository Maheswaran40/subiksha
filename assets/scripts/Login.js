function LoginFun(e){
e.preventDefault()
let username=document.getElementById("user").value
let password=document.getElementById("pass").value
if(username == "Ilife" && password==123){
    window.location.href="./assets/pages/Home.html"
}
else{
    alert("username or password is invalid")
}
}