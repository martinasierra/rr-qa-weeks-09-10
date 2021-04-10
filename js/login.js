var validationDiv = document.querySelector('.validationDiv')

function formExists() {
let hasForm = document.getElementsByTagName('form');
if (hasForm.length<1) {               
        validationDiv.innerHTML += '<p>Form is not found</p>'; 
} else {
        return true;
} }

function inputQuantity() {
let hasInputs = document.getElementsByTagName('input');
if (hasInputs.length<3) {
        validationDiv.innerHTML += '<p>Missing input fields</p>'; 
} else {
        return true;
} }

function emailRequired() {
let isRequiredE = document.querySelector(".reqE").required;
if (isRequiredE === false) {
        validationDiv.innerHTML += '<p>Email must be required</p>';
} else {
        return true; 
} }

function passRequired() {
let isRequiredP = document.querySelector(".reqP").required;
if (isRequiredP === false) {
        validationDiv.innerHTML += '<p>Password must be required</p>'; 
} else {
        return true;
} }

function hrefValueRegister() {
const a = document.querySelector('a');
a.hasAttribute('href');
let valueHref = a.getAttribute('href');
if (valueHref !== 'register.html') {
        validationDiv.innerHTML += '<p>Incorrect href value</p>';
} else {
return true;
} }

function buttonContent() {
const signInButton = document.querySelector('.button');
signInButton.hasAttribute('value');
let valueButton = signInButton.getAttribute('value');
if (valueButton !== 'Sign In') {
        validationDiv.innerHTML += '<p>Incorrect button content</p>';  
} else {
        return true; 
} }
    
function validate() {
        formExists();
        inputQuantity(),
        emailRequired();
        passRequired();
        hrefValueRegister();
        buttonContent();    
if (validationDiv.getElementsByTagName('p').length === 0) {
        validationDiv.innerHTML += '<p>Validations results: every validation has passed</p>'; 
} } 





