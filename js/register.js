let form = document.querySelector(".formRegister");
let email = document.querySelector(".emailRegister");
let password = document.querySelector(".passRegister");
let passwordRepetir = document.querySelector(".passRepetir");

email.addEventListener("input" , function() {

})

password.addEventListener("input" , function() {
    if (password.value.length < 6) {
    password.style.color = "red";
    } else {
        password.style.color = "green";
    }
})

// fijarme si no es muy confuso poner color con la validacion de caracterees
passwordRepetir.addEventListener("input" , function() {
    if (passwordRepetir.value.length < 6) {
    passwordRepetir.style.color = "red";
    } else {
        passwordRepetir.style.color = "green";
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
    } if(password.value !== passwordRepetir.value) {
        alert("Las contraseñas no coinciden")
        return;
    }

    this.submit();
    
})