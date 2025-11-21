//header//
let formulario = document.querySelector('.formHeader');
let buscador = document.querySelector('.buscarHeader');

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

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get("buscador");

let titulo = document.querySelector("#searchTitle");
titulo.innerText = "Resultados de búsqueda para: " + busqueda;

let url = "https://dummyjson.com/products/search?q=" + busqueda;

let contenedor = document.querySelector("#results");

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let productos = data.products;

        if (productos.length === 0) {
            contenedor.innerHTML = `
                <p>No se encontraron resultados para: <strong>${busqueda}</strong></p>
            `;
        } else {
            let contenido = "";

            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];

                contenido = contenido + `
                    <article class="card">
                        <img src="${producto.images[0]}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p>${producto.description}</p>
                        <p><strong>$${producto.price}</strong></p>
                        <a href="product-detail.html?id=${producto.id}">
                            Ver detalle
                        </a>
                    </article>
                `;
            }

            contenedor.innerHTML = contenido;
        }
    })
    .catch(function(error){
        console.log("Error: " + error);
    });