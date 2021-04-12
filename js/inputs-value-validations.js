let emailDiv = document.querySelector('.email');
let passDiv = document.querySelector('.pass');
const email = document.querySelector('input[type="email"]');
const pass = document.querySelector('input[type="password"]');
const pattern = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'

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
    if (pass.length >= 8) {
        var low = false;
        var num = false;        
        for(let i = 0;i<pass.length;i++) {
            if(passVal.charCodeAt(i) >= 97 && passVal.charCodeAt(i) <= 122)
                low = true;
            else if(passVal.charCodeAt(i) >= 48 && passVal.charCodeAt(i) <= 57)
                num = true;
        } }
        if (low !== true || num !== true || pass.length <8 )  
        passDiv.innerHTML += '<p>Password is not valid</p>'; 
    } 


email.addEventListener('blur', validateEmail);
pass.addEventListener('blur', validatePassword);
/* email.addEventListener('focus', eraseMessage);

 function eraseMessage() {
    let emailDiv = document.querySelector('.email');
    if (emailDiv.getElementsByTagName('p').length === 1) {
        let mailmsg = emailDiv.querySelector('p');
        mailmsg.style.display = "none";
    }
}
email.addEventListener('focus', eraseMessage); */

