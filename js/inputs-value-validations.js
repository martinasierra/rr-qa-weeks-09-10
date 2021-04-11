function validateEmail() {
    let email = document.getElementById('email');
    let emailDiv = document.querySelector('.email');
    email = email.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        emailDiv.innerHTML += '<p>Email is not valid</p>'; 
     }
}


email.addEventListener('blur', validateEmail);

const pwd = document.querySelector('input[type="password"]');

pwd.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'yellow';
});


email.onfocus = function() {
    let emailDiv = document.querySelector('.email');
    let message = emailDiv.getElementsByTagName('p')
   if (message.length === 1) {
    message.style.display = "none";
   }
  }
