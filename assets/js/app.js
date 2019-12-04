document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM FULLY LOADED AND PARSED');

// testing some stuff...
// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementById("my-failure-alert").classList.remove("d-none");
// document.getElementById("my-success-alert").classList.remove("d-none");
// document.getElementsByClassName("alert-success")[0].classList.remove("d-none");


// note: I got this code from elly but found it wasn't needed
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






// code from instructions from formspree:


window.addEventListener("DOMContentLoaded", function() {
    console.log("he this is line 62 in app.js");

    // get the form elements defined in your form HTML above

    let form = document.getElementById("contact-form");
    console.log(form, "asdf");
    console.log(typeof form, "form", form);
    let submitButton = document.getElementById("my-form-button");
    console.log(typeof submitButton, "submitButton type of");
    let status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        submitButton.style = "display: none ";
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}