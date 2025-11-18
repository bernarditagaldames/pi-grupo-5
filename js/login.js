//header//
let formulario = document.querySelector('.formHeader');
let buscador = document.querySelector('.buscarHeader');
let boton = document.querySelector('.botonHeader');

buscador.addEventListener ('input', function () {

})

formulario.addEventListener ('submit', function(e) {
    e.preventDefault();

    if (buscador.value === "") {
        alert ("El campo de busqueda no puede estar vacío.")
        return;
    }
    if (buscador.value.length < 3) {
        alert("El término debe tener al menos 3 caracteres")
        return;
    }
    this.submit()
})

//form iniciar sesion// 
let form = document.querySelector(".formulario");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

email.addEventListener("input" , function() {

})

password.addEventListener("input" , function() {
    if (password.value.length < 6) {
    password.style.color = "red";
    } else {
        password.style.color = "green";
    }
})


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
    } 

     let emailV = this.email.value;

     let emailValue = emailV
    
     let userObj = {
        email: emailValue
    };

    let userString = JSON.stringify(userObj);

    localStorage.setItem("userData", userString);
    localStorage.setItem("emailUsuario", emailValue);

    this.submit();
    
})