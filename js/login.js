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

function hrefValueRegister() {
const a = document.querySelector('a');
a.hasAttribute('href');
let valueHref = a.getAttribute('href');
if (valueHref !== 'register.html') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Incorrect href value');         
        node.appendChild(textnode);                             
        myList.appendChild(node);    
} else {
return true;
} }

function buttonContent() {
const signInButton = document.querySelector('.button');
signInButton.hasAttribute('value');
let valueButton = signInButton.getAttribute('value');
if (valueButton !== 'Sign In') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Incorrect button content');         
        node.appendChild(textnode);                             
        myList.appendChild(node);  
} else {
        return true; 
} }

function validate() {
if ((formExists()===true) && (inputQuantity()===true) && (emailRequired()===true) && (passRequired()===true) && (hrefValueRegister()===true) && (buttonContent()===true)){
        var node = document.createElement("p");                 
        var textnode = document.createTextNode('Validations results: every validation has passed');         
        node.appendChild(textnode);                             
        validationDiv.appendChild(node);
} }





