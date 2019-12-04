document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM FULLY LOADED AND PARSED in app.js');

    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault(); //
        let formOkay = updateAlertMessagesUponSubmission();
        if (formOkay) {
            jsfiddleFormSubmit();
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

function updateAlertMessagesUponSubmission() {
    if (test_valid_form()) {
        document.getElementById("local-validation-success-alert").classList.remove("d-none");
        document.getElementById("local-validation-failure-alert").classList.add("d-none");
        document.getElementById("form-spree-validation-success-alert").classList.add("d-none");
        document.getElementById("form-spree-validation-failure-alert").classList.add("d-none");
        return true
    } else {
        document.getElementById("local-validation-success-alert").classList.add("d-none");
        document.getElementById("local-validation-failure-alert").classList.remove("d-none");
        document.getElementById("form-spree-validation-success-alert").classList.add("d-none");
        document.getElementById("form-spree-validation-failure-alert").classList.add("d-none");
        return false
    }
}


function updateAlertMessagesUponServerResponse(responseOkay) {
    if (responseOkay) {
        document.getElementById("local-validation-failure-alert").classList.add("d-none");
        document.getElementById("local-validation-success-alert").classList.add("d-none");
        document.getElementById("form-spree-validation-success-alert").classList.remove("d-none");
        document.getElementById("form-spree-validation-failure-alert").classList.add("d-none");
        console.log("hi this is line 49 in updateAlertMessagesUponServerResponse" +
            " in app.js")
    } else {
        document.getElementById("local-validation-failure-alert").classList.add("d-none");
        document.getElementById("local-validation-success-alert").classList.add("d-none");
        document.getElementById("form-spree-validation-success-alert").classList.add("d-none");
        document.getElementById("form-spree-validation-failure-alert").classList.remove("d-none");
        console.log("hi this is line 56 in app.js in updateAlertMessagesUponServerResponse()" +
            "because formspree did not like the submission")

    }
}



// function displayFormReceivedSuccess() {
//     document.getElementById("success-from-form-spree").classList
//
//
// }


function jsfiddleFormSubmit() {
// this code taken from  https://jsfiddle.net/seamusleahy/rxeuaatw/


    let formEl = document.getElementById('contact-form');
    console.log("hello from line 51 of app.js")

//formEl.addEventListener('submit', function(event) {
// 1. Setup the request
// ================================
// 1.1 Headers
    let headers = new Headers();
// Tell the server we want JSON back
    ////do I need this:
    headers.set('Accept', 'application/json');

// 1.2 Form Data
    let formData = new FormData(formEl);

// ================================
////let url = '/echo/json/';
    let url = 'https://formspree.io/mgevzpbq';
    let fetchOptions = {
        method: 'POST',
        headers,
        body: formData
    };

    let responsePromise = fetch(url, fetchOptions);

// 3. Use the response
// ================================
    responsePromise
        // 3.1 Convert the response into JSON-JS object
        .then(function (response) {
            return response.json();
        })
        // 3.2 Do something with the JSON data
        .then(function (jsonData) {


            console.log(jsonData);
            console.log(JSON.stringify(jsonData).substr(0, 9));
            if (JSON.stringify(jsonData).substr(0, 9) == '{"error":') {
                console.log("hi this is an error report from line 94" +
                    " in app.js: formspree doesn't like something");
                updateAlertMessagesUponServerResponse(false);
            } else if (JSON.stringify(jsonData).substr(0, 9) == '{"next":"') {
                console.log("hi this is a success report from line 97" +
                    " in app.js: formspree does like the form");
                updateAlertMessagesUponServerResponse(true);
            }

            console.log("hi this is line 76 in app.js");
            document.getElementById('results').innerText =
            "Result from formspree: " + JSON.stringify(jsonData);
            // document.getElementById('results').classList.remove("d-none")
            // document.getElementById("success-from-form-spree").classList.remove("d-none");
        });


// event.preventDefault();
}
// end of code taken from https://jsfiddle.net/seamusleahy/rxeuaatw/