document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM FULLY LOADED AND PARSED in app.js');

    document.getElementById("exampleForm").addEventListener("submit", (e) => {
        e.preventDefault(); //
        let formOkay = updateAlertMessages();
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
    if (document.getElementById("exampleInputName").value === "" ||
        document.getElementById("exampleInputEmail1").value === "" ||
        document.getElementById("exampleTextInputMusic").value === "" ||
        document.getElementById("exampleTextInputColors").value === "" ) {
        // id="exampleFormComments" is optional so not tested here
        return false;
    } else return testEmailValid();


}

function updateAlertMessages() {
    if (test_valid_form()) {
        document.getElementById("my-success-alert").classList.remove("d-none");
        document.getElementById("my-failure-alert").classList.add("d-none");
        return true
    } else {
        document.getElementById("my-failure-alert").classList.remove("d-none");
        document.getElementById("my-success-alert").classList.add("d-none");
        return false
    }
}




function jsfiddleFormSubmit() {
// this code taken from  https://jsfiddle.net/seamusleahy/rxeuaatw/


    let formEl = document.getElementById('exampleForm');
    console.log("hello from line 51 of app.js")

//formEl.addEventListener('submit', function(event) {
// 1. Setup the request
// ================================
// 1.1 Headers
    let headers = new Headers();
// Tell the server we want JSON back
    headers.set('Accept', 'application/json');

// 1.2 Form Data
// We need to properly format the submitted fields.
// Here we will use the same format the browser submits POST forms.
// You could use a different format, depending on your server, such
// as JSON or XML.
    let formData = new FormData(formEl);
    // for (let i = 0; i < formEl.length; ++i) {
    //     formData.append(formEl[i].name, formEl[i].value);
    // }

// This is for the purpose of this demo using jsFiddle AJAX Request endpoint
    // I don't need this ?
    formData.append('json', JSON.stringify({example: 'return value'}));

// 2. Make the request
// ================================
////let url = '/echo/json/';
//     let url = "fake.fakestreet.com"
    let url = "https://formspree.io/mgevzpbq"

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
            console.log("hi this is line 76 in app.js");
            document.getElementById('results').innerText =
            JSON.stringify(jsonData);
            document.getElementById('results').classList.remove("d-none")
            // document.getElementById("success-from-form-spree").classList.remove("d-none");
        });


// event.preventDefault();
}
// end of code taken from https://jsfiddle.net/seamusleahy/rxeuaatw/