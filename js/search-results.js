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

