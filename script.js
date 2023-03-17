// navbar
let navbar = document.querySelector('.navbar');
let button = document.querySelector('.menu-btn');

button.addEventListener('click', function(){
    navbar.classList.toggle('navbar-active');
    button.classList.toggle('menu-btn-active');
})

// carousel
let count = 1;
document.getElementById("radio1").checked = true;

function nextImage(){
    count++;
    if (count>3) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

setInterval(function(){
 nextImage();   
}, 3500)