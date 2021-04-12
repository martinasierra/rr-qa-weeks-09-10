const fullName = document.querySelector('input[type="text"]');
const patternFN = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
//const pass = document.querySelector('input[name="password"]');
let cPassDiv = document.querySelector('.c-password');
const confPass = document.querySelector('input[name="c-password"]');

function validateFullName() {
    fnval = fullName.value;
    if (patternFN.test(fnval))
    return true;
    else
        fullNameDiv.innerHTML += '<p>Full Name is not valid</p>'; 
}



function validConfirmPass() {
    passVal = pass.value;
    passValConf = confPass.value;
    if (passVal !== passValConf) {
        cPassDiv.innerHTML += '<p>Passwords doesn\'t match.</p>'
    }
}


fullName.addEventListener('blur',validateFullName);
confPass.addEventListener('blur', validConfirmPass);


function validateForm() {
    if (validateEmail() ===  true && validatePassword() === true)
    return true;
}

submitBtn.onclick = function(event) {
    event.preventDefault();
    if (validateForm() === true) {
        validationDiv.innerHTML += (`Email: ${email.value}`);
        validationDiv.innerHTML += (`Password: ${pass.value}`);
    }
}