document.addEventListener("DOMContentLoaded", () => {
    fetch("./assets/components/footer.html").then(response => {
        return response.text();
    }).then(data => {
        document.getElementById("footer").innerHTML = data;
    })
})