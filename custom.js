function printCompany() {
    document.getElementById("outputCompany").innerHTML = inputCompany.value;
}

function printMessage() {
    document.getElementById("outputMessage").innerHTML = inputMessage.value;
}

function changeBg() {
    var bgColor = document.getElementById('inputBg').value;
    document.getElementById('card').style.background = bgColor;
}

function changeText() {
    var textColor = document.getElementById('inputText').value;
    document.getElementById('card').style.color = textColor;
}

// Text Align
function textAlign(selected_id) {
    document.getElementById('card').className = selected_id;
}


// Your Name
function printName() {
    document.getElementById('outputName').innerHTML = inputName.value;
}

// Job
function printJob() {
    document.getElementById('outputJob').innerHTML = inputJob.value;
}

// Email
function printEmail() {
    document.getElementById('outputEmail').innerHTML = "Email: " + inputEmail.value;
}

// Telephone
function printTelephone() {
    document.getElementById('outputTelephone').innerHTML = "Tel: " + inputTelephone.value;
}

// Submit
function formSubmit() {
    if (!inputName.value) {
        alert("Please complete all required sections");
    }
}

// Reset
function formReset() {
    window.location.reload();
}