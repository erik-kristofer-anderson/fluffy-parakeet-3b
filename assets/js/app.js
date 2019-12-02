function myAppOnLoad() {
    $('alert').alert();
}

document.addEventListener('onload', myAppOnLoad);

document.getElementById("contact").addEventListener("submit", (e) => {
    e.preventDefault(); //
});