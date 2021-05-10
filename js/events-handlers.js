var validationDiv = document.querySelector('.validationDiv');
let emailDiv = document.querySelector('.email');
let passDiv = document.querySelector('.pass');
const email = document.querySelector('input[name="email"]');
const pass = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('input[type="submit"]');
let flag = true;

function validateEmail() {    
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    return true;
    else {
    if (flag === true) {
        let p = document.createElement('p');
        p.textContent = 'Email is not valid';
        emailDiv.appendChild(p);
        emailDiv.style.color = 'red';
        flag = false;
}   
    }};

function validatePassword() {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass.value))  
    return true;
    else 
     {
        let p = document.createElement('p');
        p.textContent = 'Password is not valid';
        passDiv.appendChild(p);
        passDiv.style.color = 'red';
    } };

email.addEventListener('blur', validateEmail);
pass.addEventListener('blur', validatePassword);

email.addEventListener('focus', function () {
    if (emailDiv.getElementsByTagName('p').length >= 1) {
        let mailmsg = emailDiv.getElementsByTagName('p');
        emailDiv.removeChild(mailmsg); }
  });

  pass.addEventListener('focus', function () {
    if (passDiv.getElementsByTagName('p').length >= 1) {
        let passmsg = passDiv.querySelector('p');
        passDiv.removeChild(passmsg); }
    });


function validateForm() {
    if (validateEmail() === true && validatePassword() === true)
    return true;
};

function logUser() {
    fetch('http://localhost:4000/login', {
        method: 'PUT', 
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email.value,
            password: pass.value})
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
};

submitBtn.onclick = function(event) {
    event.preventDefault();
    if (validateForm() === true) {
        let pe = document.createElement('p');
        pe.textContent = (`Email: ${email.value}`);
        validationDiv.appendChild(pe);
        let pp = document.createElement('p');
        pp.textContent = (`Password: ${pass.value}`);
        validationDiv.appendChild(pp);
        validationDiv.style.display = 'block';
    logUser();
    };
};

