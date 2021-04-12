var validationDiv = document.querySelector('.validationDiv');
let emailDiv = document.querySelector('.email');
let passDiv = document.querySelector('.pass');
let fullNameDiv = document.querySelector('.full-name');
const email = document.querySelector('input[type="email"]');
const pass = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('input[type="submit"]');
const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


function validateEmail() {    
    emailVal = email.value;
    atpos = emailVal.indexOf("@");
    dotpos = emailVal.lastIndexOf(".com");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        let p = document.createElement('p');
        p.textContent = 'Email is not valid';
        emailDiv.appendChild(p);
        emailDiv.style.color = 'red';
     }
     else 
        return true;
}

function validatePassword() {
    passVal = pass.value;
    if (pattern.test(passVal))  
    return true;
    else {
        let p = document.createElement('p');
        p.textContent = 'Password is not valid';
        passDiv.appendChild(p);
        passDiv.style.color = 'red';
    } }

email.addEventListener('blur', validateEmail);
pass.addEventListener('blur', validatePassword);

email.addEventListener('focus', function () {
    if (emailDiv.getElementsByTagName('p').length === 1) {
        let mailmsg = emailDiv.querySelector('p');
        mailmsg.style.display = "none"; }
  });

  pass.addEventListener('focus', function () {
    if (passDiv.getElementsByTagName('p').length === 1) {
        let passmsg = passDiv.querySelector('p');
        passmsg.style.display = "none"; }
  });


function validateForm() {
    if (validateEmail() ===  true && validatePassword() === true)
    return true;
}

async function getUser() {
    fetch(`https://jsonplaceholder.typicode.com/users?email=${email.value}`)
    .then(function(response){
        return response.json();
    })
    .then(data => console.log(data))
    .catch()
}

submitBtn.onclick = function(event) {
    event.preventDefault();
    if (validateForm() === true) {
        validationDiv.innerHTML += (`Email: ${email.value}`);
        validationDiv.innerHTML += (`Password: ${pass.value}`);
    getUser();
    }
}

