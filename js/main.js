var openModal = document.querySelector(".site-header__burger");
var openModalImg = document.querySelector(".site-header__burger");
var overlay = document.querySelector(".overlay");
var showModal = document.querySelector(".site-header__hidden");

var icon = true

openModal.addEventListener("click", function(){
    showModal.classList.toggle("site-header__hidden--acitve")
    overlay.classList.toggle("overlay--active")

    if(icon){
        openModalImg.src = "../images/toggler-close.svg"
    } else {
        openModalImg.src = "../images/toggler-open.svg"
    }

    icon = !icon
})

