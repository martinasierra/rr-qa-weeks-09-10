const fullName = document.querySelector('input[type="text"]');
let fullNameDiv = document.querySelector('.fullName');
const patternFN = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
let cPassDiv = document.querySelector('.cPassword');
const confPass = document.querySelector('input[name="cPassword"]');
const resetBtn = document.querySelector('input[type="reset"]');

function validateFullName() {
    fnval = fullName.value;
    if (patternFN.test(fnval))
    return true;
    else {
        let p = document.createElement('p');
        p.textContent = 'Full Name is not valid';
        fullNameDiv.appendChild(p);
        fullNameDiv.style.color = 'red';
} }

function validConfirmPass() {
    passVal = pass.value;
    passValConf = confPass.value;
    if (passVal === passValConf) 
        return true; 
    else {
        let p = document.createElement('p');
        p.textContent = 'Passwords doesn\'t match';
        cPassDiv.appendChild(p);
        cPassDiv.style.color = 'red';       
} }

fullName.addEventListener('blur',validateFullName);
confPass.addEventListener('blur', validConfirmPass);

fullName.addEventListener('focus', function () {
    if (fullNameDiv.getElementsByTagName('p').length === 1) {
        let fullNameMsg = fullNameDiv.querySelector('p');
        fullNameDiv.removeChild(fullNameMsg); }
  });

  confPass.addEventListener('focus', function () {
    if (cPassDiv.getElementsByTagName('p').length === 1) {
        let confPassMsg = cPassDiv.querySelector('p');
        cPassDiv.removeChild(confPassMsg);
         }
  });

function validateForm() {
    if ((validateEmail() ===  true) && (validatePassword() === true) && (validateFullName() === true) 
    && (validConfirmPass() === true)) {
    return true;
} }

function registerUser() {
    fetch('http://localhost:4000/register', {
        method: 'POST', 
        body: JSON.stringify({
            email: email.value,
            fullName: fullName.value,
            password: pass.value}),
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}

submitBtn.onclick = function(event) {
    event.preventDefault();
    if (validateForm() === true) {
        let pe = document.createElement('p');
        pe.textContent = (`Email: ${email.value}`);
        validationDiv.appendChild(pe);
        let pfn = document.createElement('p');
        pfn.textContent = (`Full Name: ${fullName.value}`);
        validationDiv.appendChild(pfn);
        let pp = document.createElement('p');
        pp.textContent = (`Password: ${pass.value}`);
        validationDiv.appendChild(pp);
        validationDiv.style.display = 'block';
        registerUser();
    }
}

resetBtn.onclick = function() {
    cPassDiv.removeChild(cPassDiv.querySelector('p'));
    emailDiv.removeChild(emailDiv.querySelector('p'));
    passDiv.removeChild(passDiv.querySelector('p'));
    fullNameDiv.removeChild(fullNameDiv.querySelector('p'));
}