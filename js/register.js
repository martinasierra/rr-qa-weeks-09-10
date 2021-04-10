var myList = document.querySelector('.myList');
var validationDiv = document.querySelector('.validationDiv')

function formExists() {
let hasForm = document.getElementsByTagName('form');
if (hasForm.length<1) { 
        var node = document.createElement("li");                
        var textnode = document.createTextNode('Form is not found');         
        node.appendChild(textnode);                             
        myList.appendChild(node); 
} else {
        return true;
} }
        
function inputQuantity() {
let hasInputs = document.getElementsByTagName('input');
if (hasInputs.length<3) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Missing input fields');         
        node.appendChild(textnode);                             
        myList.appendChild(node); 
} else {
        return true;
} }
        
function emailRequired() {
let isRequiredE = document.querySelector(".reqE").required;
if (isRequiredE === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Email must be required');         
        node.appendChild(textnode);                             
        myList.appendChild(node); 
} else {
        return true; 
} }

function fullNameRequired() {
let isRequiredFN = document.querySelector(".reqFN").required;   
if (isRequiredFN === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Full Name must be required');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
} else {
        return true; 
} }

function passRequired() {
let isRequiredP = document.querySelector(".reqP").required;
if (isRequiredP === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Password must be required');         
        node.appendChild(textnode);                             
        myList.appendChild(node); 
} else {
        return true;
} }

function confirmPass() {
let isRequiredCPass = document.querySelector(".reqConfPass").required;
if (isRequiredCPass === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Password confirmation must be required');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
} else {
        return true;
} }

function resetButtonContent() {
const buttonReset = document.querySelector('.b-reset');
buttonReset.hasAttribute('value');
let valueBReset = buttonReset.getAttribute('value');
if (valueBReset !== 'Reset') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Incorrect Reset button content');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);
} else {
        return true;
} }

function submitButtonContent() {
const buttonSubmit = document.querySelector('.b-submit');
buttonSubmit.hasAttribute('value');
let valueBSubmit = buttonSubmit.getAttribute('value');
if (valueBSubmit !== 'Submit') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Incorrect Submit button content');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
} else {
        return true;
} }

function validate() {
if ((formExists()===true) && (inputQuantity()===true) && (emailRequired()===true) && (fullNameRequired()===true) && (passRequired()===true) && (confirmPass()===true) && (resetButtonContent()===true) && (submitButtonContent()===true)){
        var node = document.createElement("p");                 
        var textnode = document.createTextNode('Validations results: every validation has passed');         
        node.appendChild(textnode);                             
        validationDiv.appendChild(node);
} }
                        
