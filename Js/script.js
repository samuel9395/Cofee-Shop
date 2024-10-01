let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bnt').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-bnt').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}

let cartitem = document.querySelector('.cart-items-container');

document.querySelector('#cart-bnt').onclick = () =>{
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
} 