// testing some stuff...
// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementById("my-failure-alert").classList.remove("d-none");
// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementsByClassName("alert-success")[0].classList.remove("d-none");


// note: got this code from elly but found it wasn't needed
// function myAppOnLoad() {
//     $('alert').alert();
// }
//
//
// document.addEventListener('onload', myAppOnLoad);

document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault(); //
    if (test_valid_form()) {
        document.getElementById("my-success-alert").classList.remove("d-none");
        document.getElementById("my-failure-alert").classList.add("d-none");
    } else {
        document.getElementById("my-failure-alert").classList.remove("d-none");
        document.getElementById("my-success-alert").classList.add("d-none");
    }
});

// debugger;

function testEmailValid() {
    // todo implement email validation check
    // re
    // if true, email is okay
    return true;
}

function test_valid_form() {
    if (document.getElementById("contact-music").value === "" ||
        document.getElementById("contact-colors").value === "" ||
        document.getElementById("contact-email").value === "" ||
        document.getElementById("contact-comments").value === "" ) {
        return false;
    } else return testEmailValid();


}


