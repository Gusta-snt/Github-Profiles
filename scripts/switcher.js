const switcher = document.getElementById("switcher-border");
const switchCircle = document.getElementById("switcher-circle");
const iconTheme = document.getElementById("icon-theme");
const logoDiv = document.getElementById("logo-div");
const body = document.querySelector("body");



function toggleTheme () {
    switchCircle.classList.toggle("active");
    switcher.classList.toggle("active");
    body.classList.toggle("active");
    logoDiv.classList.toggle("active");

    if (iconTheme.classList == "fa-solid fa-sun"){
        iconTheme.classList.remove("fa-sun");
        iconTheme.classList.add("fa-moon");
    }else{
        iconTheme.classList.add("fa-sun");
        iconTheme.classList.remove("fa-moon");
    }
}

switcher.addEventListener('click', toggleTheme);
