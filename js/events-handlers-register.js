const fullName = document.querySelector('input[type="text"]');
const patternFN = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;

function validateFullName() {
    fnval = fullName.value;
    if (patternFN.test(fnval))
    return true;
    else
        fullNameDiv.innerHTML += '<p>Full Name is not valid</p>'; 
}

fullName.addEventListener('blur',validateFullName);