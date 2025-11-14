let form = document.querySelector(".formulario");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

let userObj = {
    email : email,
    password : password,
}

email.addEventListener("input" , function() {
    
})

password.addEventListener("input" , function() {

})

let userString = JSON.stringify(userObj)
sessionStorage.setItem("userData" , userString);

form.addEventListener("submit" , function(e) {
    e.preventDefault();

    if (email.value == "") {
        alert("El campo email es obligatorio")
        return;
    } if (password.value == "") {
        alert("El campo contraseña es obligatorio")
        return;
    } if (password.value.length < 6) {
        alert("La contraseña debe detener como minimo 6 caracteres")
        return;
    } else {
        this.submit()
    }

})