document.addEventListener("DOMContentLoaded", () => {
    fetch("./assets/components/header.html").then(response => {
        return response.text();
    }).then(data => {
        document.getElementById("header").innerHTML = data;
    })
})