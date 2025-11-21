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
    this.submit();
});

//punto 6

let aside = document.querySelector('.menuCat');

fetch("https://dummyjson.com/products/categories")
.then(function(response){
    return response.json();
})
.then(function(categorias){

    for(let i = 0; i < categorias.length; i++){

        if (categorias[i].slug === "smartphones" || categorias[i].slug === "mobile-accessories") {

            aside.innerHTML += `
                <li>
                    <a href="./category.html?slug=${categorias[i].slug}">
                        ${categorias[i].name}
                    </a>
                </li>
            `;
        }
    }
})
.catch(function(e){
    console.log(e);
});


let queryString = location.search;
let qsObj = new URLSearchParams(queryString);
let slug = qsObj.get("slug");
let titulo = document.querySelector("main h2");
let contenedor = document.querySelector(".productos");

titulo.innerText = "Categoría: " + slug;

fetch("https://dummyjson.com/products/category/" + slug)
.then(function(response){
    return response.json();
})
.then(function(data){

    let productos = data.products;
    contenedor.innerHTML = "";

    for(let i = 0; i < productos.length; i++){
        let p = productos[i];

        contenedor.innerHTML += `
            <article class="producto">
                <img src="${p.images[0]}" alt="${p.title}">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <p>$${p.price}</p>
                <a href="./product.html?id=${p.id}" class="btn">Ver detalle</a>
            </article>
        `;
    }
})
.catch(function(e){
    console.log(e);
});
