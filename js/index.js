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
    this.submit();
});

//punto 4//
let contenedorTodos = document.querySelector(".todosproductos");
let contenedorMasVendidos = document.querySelector(".productos");

fetch("https://dummyjson.com/products/category/smartphones")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let productos = data.products;

        let todos = [];       

        for (let i = 0; i < productos.length; i++) {

            if (todos.length < 10) {
              todos.push(productos[i])
              }
        }
        
        for (let i = 0; i < todos.length; i++) {
            contenedorTodos.innerHTML += `
                <article class="producto">
                    <img src="${todos[i].images[0]}" alt="${todos[i].title}">
                    <h3>${todos[i].title}</h3>
                    <p>${todos[i].description}</p>
                    <p>$${todos[i].price}</p>
                    <a href="./product.html?id=${todos[i].id}" class="btn">Ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function(error){
        console.log("Error", error);
    });


fetch("https://dummyjson.com/products/category/mobile-accessories")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let productos = data.products;

        let masVendidos = [];       

        for (let i = 0; i < productos.length; i++) {

            if (masVendidos.length < 10) {
              masVendidos.push(productos[i])
              }
        }
        
        for (let i = 0; i < masVendidos.length; i++) {
            contenedorMasVendidos.innerHTML += `
                <article class="producto">
                    <img src="${masVendidos[i].images[0]}" alt="${masVendidos[i].title}">
                    <h3>${masVendidos[i].title}</h3>
                    <p>${masVendidos[i].description}</p>
                    <p>$${masVendidos[i].price}</p>
                    <a href="./product.html?id=${masVendidos[i].id}" class="btn">Ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function(error){
        console.log("Error", error);
    });

    