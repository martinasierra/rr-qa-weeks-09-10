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

function fullNameRequired() {
let isRequiredFN = document.querySelector(".reqFN").required;   
if (isRequiredFN === false) {
        validationDiv.innerHTML += '<p>Full Name must be required</p>';
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

function confirmPass() {
let isRequiredCPass = document.querySelector(".reqConfPass").required;
if (isRequiredCPass === false) {
        validationDiv.innerHTML += '<p>Password confirmation must be required</p>'; 
} else {
        return true;
} }

function resetButtonContent() {
const buttonReset = document.querySelector('.b-reset');
buttonReset.hasAttribute('value');
let valueBReset = buttonReset.getAttribute('value');
if (valueBReset !== 'Reset') {
        validationDiv.innerHTML += '<p>Incorrect Reset button content</p>';  
} else {
        return true;
} }

function submitButtonContent() {
const buttonSubmit = document.querySelector('.b-submit');
buttonSubmit.hasAttribute('value');
let valueBSubmit = buttonSubmit.getAttribute('value');
if (valueBSubmit !== 'Submit') {
        validationDiv.innerHTML += '<p>Incorrect Submit button content</p>';  
} else {
        return true;
} }

function validate() {
        formExists();
        inputQuantity(),
        emailRequired();
        fullNameRequired();
        passRequired();
        confirmPass();
        resetButtonContent();   
        submitButtonContent();
if (validationDiv.getElementsByTagName('p').length === 0) {
        validationDiv.innerHTML += '<p>Validations results: every validation has passed</p>'; 
} } 
                  
