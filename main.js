

// Add input fields and form to variables

const form = document.getElementById("contact-form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const red = '#F44336';



// Validator functions


form.addEventListener("submit", function (event) {
    if(!validateName()){
        event.preventDefault();
    } else if(!validateEmail()){
        event.preventDefault();
    } else if(!validateSubject()){
        event.preventDefault();
    } else if (!validateMessage()){
        event.preventDefault();
    }
});

function validateName() {
    if(checkIfEmpty(name)) return;
    if(!checkIfOnlyLetters(name)) return;
    return true;
}

function validateSubject() {
    if(checkIfEmpty(subject)) return;
    return true;
}

function validateMessage() {
    if(checkIfEmpty(message)) return;
    return true;
}

function validateEmail() {
    if(checkIfEmpty(email)) return;
    if(!containsCharacters(email)) return;
    return true;
}

// Utility functions

function checkIfEmpty(field) {
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if(value === '') return true;
    return false;
}

function setInvalid(field,message) {
    field.className = 'invalid';
    field.style.borderColor = red;
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field) {
    field.className = 'valid';
    field.style.borderColor = 'initial';
    field.nextElementSibling.innerHTML = '';
}

function checkIfOnlyLetters(field) {
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function containsCharacters(field) {
    let regEx;

    // Email pattern

    regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return matchWithRegEx(regEx,field, 'Must be a valid email address');
}

function matchWithRegEx(regEx,field,message) {
    if(field.value.match(regEx)){
        setValid(field);
        return true;
    } else{
        setInvalid(field,message);
        return false;
    }
}