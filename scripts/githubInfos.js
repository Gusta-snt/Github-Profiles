const logo = document.getElementById("logo-div");
const form = document.getElementById("container-form");
const page2 = document.getElementById("page2");
const lblUser = document.getElementById("user");

function changePage() {

    const user = document.getElementById("githubUser").value;

    const url =`https://api.github.com/users/${user}`;

    console.log(user)

    fetch(url).then(response => response.json()).then(data => {
        lblUser.innerHTML = data.name;
    })

    logo.style.display = "none";
    form.style.display = "none";
    page2.style.display = "block";
}