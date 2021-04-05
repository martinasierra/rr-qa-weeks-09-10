function validate(){
    let hasForm = document.getElementsByTagName('form');
    let hasInputs = document.getElementsByTagName('input');
    const a = document.querySelector('a');
    a.hasAttribute('href');
    let valueHref = a.getAttribute('href');
    const buttonSignIn = document.getElementsByTagName('input');
    let valueButton = buttonSignIn.getAttribute('value');
    if ((hasForm>0) && (hasInputs>=3)) {
        document.getElementById("validationDiv").innerHTML = "all tests were successfully performed";
    }
    else if ((valueHref !== 'register.html') && (valueButton !== 'Sign In')) {
        document.getElementById("validationDiv").innerHTML = "there were some errors";
}
}

