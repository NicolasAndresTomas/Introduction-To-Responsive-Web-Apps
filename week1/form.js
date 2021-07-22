document.getElementById("form").onsubmit = function () {
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var subject = document.forms["form"]["subject"].value;
    var message = document.forms["form"]["message"].value;
    var pattern = /\S+@\S+\.\S+/;
    var submit = true;


    if (name == null || name == "") {
        nameError = "Please enter your name";
        document.getElementById("name_error").innerHTML = nameError;
        submit = false;
    }

    if (!pattern.test(email)){
        emailError = "Please enter your email";
        document.getElementById("email_error").innerHTML = emailError;
        submit = false;
    }

    if (subject == null || subject == "") {
        subjectError = "Please enter your subject";
        document.getElementById("subject_error").innerHTML = subjectError;
        submit = false;
    }

    if (message == null || message == "") {
        messageError = "Please enter your message";
        document.getElementById("message_error").innerHTML = messageError;
        submit = false;
    }
    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("subject").onkeyup = removeWarning;
document.getElementById("message").onkeyup = removeWarning;
