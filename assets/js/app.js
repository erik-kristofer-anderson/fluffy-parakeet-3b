// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementById("my-failure-alert").classList.remove("d-none");

// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementsByClassName("alert-success")[0].classList.remove("d-none");

function myAppOnLoad() {
    $('alert').alert();
}


document.addEventListener('onload', myAppOnLoad);

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
//

// Using https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation for guidance on this part
// let form = document.getElementById('contact-form');
// let email = document.getElementById("contact-email");
// let success = document.getElementById("my-success-alert");
// let error = document.getElementById( "my-failure-alert");
//


function test_valid_form() {
    let form = document.getElementById('contact-form');
    // does the input with id = "contact-music" make sense
    // I'm just gonna say it should not be empty
    if (document.getElementById("contact-music").value == "") {
        return false;
    } else {
        return true;
    }


}


// email.addEventListener("input", function() {
//     if (test_valid_form()) {
//         document.getElementById("my-success-alert").classList.remove("d-none");
//         // success.classList.remove("d-none");
//         // error.classList.add("d-none)");
//     } else {
//         document.getElementById("my-failure-alert").classList.remove("d-none");
//     }
//
// });

// function revealSuccessAlert() {
//     document.getElementById("my-success-alert").classList.remove("d-none");
// }


// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementById("my-success-alert").classList.add("d-none)");
// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementById("my-success-alert).classList.add("d-none)");
