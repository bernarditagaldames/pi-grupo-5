let logoutBtn = document.querySelector(".logoutLink");
let bienvenida = document.querySelector(".bienvenida");

if (logoutBtn != null) {

    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();

        localStorage.removeItem("emailUsuario");
        localStorage.removeItem("userData");

        if (bienvenida != null) {
            bienvenida.style.display = "none";
        }
        logoutBtn.style.display = "none";

        if (linkLogin != null) {
            linkLogin.style.display = "inline";
        }
        if (linkRegister != null) {
            linkRegister.style.display = "inline";
        }
    });

}