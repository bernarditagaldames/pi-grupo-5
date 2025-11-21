let aside = document.querySelector('.menuCat');

fetch("https://dummyjson.com/products/categories")
.then(function(response){
    return response.json();
})
.then(function(categorias){

    for(let i = 0; i < categorias.length; i++){

            aside.innerHTML += `
                <li>
                    <a href="./category.html?slug=${categorias[i].slug}">
                        ${categorias[i].name}
                    </a>
                </li>
            `;
        
    }
})
.catch(function(e){
    console.log(e);
});

//movi el punto 6 y 3 a este js separado porque hay que vincularlo en todas las paginas//