let emailDiv = document.querySelector('.email');
let passDiv = document.querySelector('.pass');
let fullNameDiv = document.querySelector('.full-name');
const email = document.querySelector('input[type="email"]');
const pass = document.querySelector('input[name="password"]');
let cPassDiv = document.querySelector('.c-password');
const confPass = document.querySelector('input[name="c-password"]');
const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


function validateEmail() {    
    emailVal = email.value;
    atpos = emailVal.indexOf("@");
    dotpos = emailVal.lastIndexOf(".com");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        emailDiv.innerHTML += '<p>Email is not valid</p>'; 
     }
}

function validatePassword() {
    passVal = pass.value;
    if (pattern.test(passVal))  
    return true;
    else
        passDiv.innerHTML += '<p>Password is not valid</p>'; 
    }

function validConfirmPass() {
    passVal = pass.value;
    passValConf = confPass.value;
    if (passVal !== passValConf) {
        cPassDiv.innerHTML += '<p>Passwords doesn\'t match.</p>'
    }
}


email.addEventListener('blur', validateEmail);
pass.addEventListener('blur', validatePassword);
confPass.addEventListener('blur', validConfirmPass);

/* email.addEventListener('focus', eraseMessage);

 function eraseMessage() {
    let emailDiv = document.querySelector('.email');
    if (emailDiv.getElementsByTagName('p').length === 1) {
        let mailmsg = emailDiv.querySelector('p');
        mailmsg.style.display = "none";
    }
}
email.addEventListener('focus', eraseMessage); */

