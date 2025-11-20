//header//
let formulario = document.querySelector('.formHeader');
let buscador = document.querySelector('.buscarHeader');
let boton = document.querySelector('.botonHeader');

buscador.addEventListener('input', function () {

})

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    if (buscador.value === "") {
        alert("El campo de busqueda no puede estar vacío.")
        return;
    }
    if (buscador.value.length < 3) {
        alert("El término debe tener al menos 3 caracteres")
        return;
    }
    this.submit()
})

//detalle productos//
let queryString = location.search;
let parametros = new URLSearchParams(queryString);
let idProducto = parametros.get('id');
let URL = `https://dummyjson.com/products/${idProducto}`;

fetch(URL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
       let imagen = document.querySelector('.imagenProducto');
       let titulo = document.querySelector('.tituloProducto');
       let marca = document.querySelector('.marcaProducto');
       let categoriaLink = document.querySelector('.categoriaProducto');
       let precio = document.querySelector('.precioProducto');
       let stock = document.querySelector('.stockProducto');
       let descripcion = document.querySelector('.descripcionProducto');
       let tags = document.querySelector('.tagsProducto');

       imagen.src = data.images[0];
       titulo.innerText = data.title;
       marca.innerHTML += '' + data.brand;
       categoriaLink.innerHTML += '' + data.category;
       categoriaLink.href = `./category.html?category=${data.category}`
       precio.innerHTML += ' $' + data.price;
       stock.innerHTML += '' + data.stock;
       descripcion.innerHTML = '' + data.description;
       
       tags.innerHTML += '';
       for(let i = 0; i < data.tags.length && i < 3; i++) {
           tags.innerHTML += data.tags[i] + '';
       }

    }) 
.catch (function(e) {
    console.log(e)
});
