$(document).ready(function () {
    $(".submit").click(function (event) {
        if(submit == false) {
            window.location.reload();
            prompt("Please fill out the form again");
        }  else {
            return;
        }
        var email =$(".email").val()
        var subject = $(".subject").val()
        var firstName = $(".firstname").val()
        var lastName = $(".lastname").val()
        var statusElm = $(".status")
        statusElm.empty()

        if(email.length > 5 && email.includes("@") && email.includes(".")) {
            statusElm.append("<div>Email is valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Email is not valid</div>")
        }

        if(subject.length > 10) {
            statusElm.append("<div>Subject is valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>Subject is not valid</div>")
        }

        if(firstName.length > 5) {
            statusElm.append("<div>First name is valid</div>")
        } else {
            event.preventDefault()
            statusElm.append("<div>First name is not valid</div>")
        }

        if(lastName.length >5) {
        statusElm.append("<div>Last name is valid</div>")
        } else {
            event.preventDefault()
        statusElm.append("<div>Last name is not valid</div>")
        }
    })
}); 


// document.addEventListener("DOMContentLoaded", function() {
//     fields.firstName = document.getElementById('fname');
//     fields.lastName = document.getElementById('lname');
//     fields.email = document.getElementById('email');
//     fields.subject = document.getElementById('subject');
// });



// var fields = {
// // Checks to see if contact form is completely filled out
// function isNotEmpty (value) {
//     if (value == null || typeof value == 'undefined') return false;
//     return (value.length > 0);
// };
// console.log(return);

// //Checks email
// function isEmail (email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{ | }~-]+@[a-zA-Z0-9](?:
//             [a-zA-Z0-9-] {0,61} [a-zA-Z0-9])?(?:\.[a-zA-Z0-9] (?:[a-zA-Z0-9-] {0,61}
//             [a-zA-Z0-9]) ?)*$/;

//             return (regrex.test.(String(email).tolowerCase())
// });

// //Field validation
// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;

//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//         field.className = 'placeholderRed';
//     } else {
//         field.className = ' ';
//     }
//     return isFieldValid;
// };
// //Checks that field exists -- validity of the field value
// function validationFunction(field.value) {

// if (!isFieldValid) {
//     field.className= 'placeholderRed';
// } else {
//     field.className = ' ';
// }};

// //Combine all the checks
// function isValid() {
//     var valid = true;

//     valid &= fieldValidation(fields.firstName, isNotEmpty);
//     valid &= fieldValidation(fields.lastName, isNotEmpty);
//     valid &= fieldValidation(fields.email, isNotEmpty);
//     valid &= fieldValidation(fields.subject, isNotEmpty);

//     return valid;
// };

// //User Class constructor
// class User {
//     constructor(firstName, lastName, email, subject) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.subject = subject;
//     }
// };

// function sendContact() {
//     if (isValid()) {
//         let usr = new User(firstName.value, lastName.value, email.value, subject.checked);

//         prompt(`${usr.firstName}thank you for submitting!`)

//     } else {
//         alert("There was an error")
//     }
// };
// };