document.getElementById("form").onsubmit = function () { // form function
  
    var name = document.forms["form"]["name"].value; // variable for name
    var email = document.forms["form"]["email"].value; // variable for email
    var subject = document.forms["form"]["subject"].value; // variable for subject
    var message = document.forms["form"]["message"].value; // variable for message
    var pattern = /\S+@\S+\.\S+/; // variable for pattern
    var submit = true; // variable for submit


    if (name == null || name == "") { // if name is null or not null
        nameError = "Please enter your name"; // display error message for name
        document.getElementById("name_error").innerHTML = nameError;
        submit = false; // if submit is null do not submit
    }

    if (!pattern.test(email)){ // email pattern
        emailError = "Please enter your email"; // error message for email
        document.getElementById("email_error").innerHTML = emailError;
        submit = false; // if email is null do not submit
    }

    if (subject == null || subject == "") { // if subject is null or not null
        subjectError = "Please enter your subject"; // display error message for subject
        document.getElementById("subject_error").innerHTML = subjectError;
        submit = false; // if subject is null do not submit
    }

    if (message == null || message == "") { // if message is null or not null
        messageError = "Please enter your message"; // display error message for message
        document.getElementById("message_error").innerHTML = messageError;
        submit = false; // if message is null do not submit
    }
    return submit; // if all valid than returns submit
}

function removeWarning() { // remove warning messages once variables arent null
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning; // remove warning message for name
document.getElementById("email").onkeyup = removeWarning; // remove warning message for email
document.getElementById("subject").onkeyup = removeWarning; // remove warning message for subject
document.getElementById("message").onkeyup = removeWarning; // remove warning messages for message
