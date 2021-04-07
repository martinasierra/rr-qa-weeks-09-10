function validate() {
    let hasForm = document.getElementsByTagName('form');
    let hasInputs = document.getElementsByTagName('input');
    let isRequiredE = document.querySelector(".reqE").required;
    let isRequiredP = document.querySelector(".reqP").required;
    let isRequiredFN = document.querySelector(".reqFN").required;
    let isRequiredCPass = document.querySelector(".reqConfPass").required;
    const buttonReset = document.querySelector('.b-reset');
    buttonReset.hasAttribute('value');
    let valueBReset = buttonReset.getAttribute('value');
    const buttonSubmit = document.querySelector('.b-submit');
    buttonSubmit.hasAttribute('value');
    let valueBSubmit = buttonSubmit.getAttribute('value');
    if (hasForm.length<1) { 
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Validations results: form is not found');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (hasInputs.length<6) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Missing input fields');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (isRequiredE === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Email must be required');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (isRequiredFN === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Full Name must be required');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (isRequiredCPass === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Password confirmation must be required');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (isRequiredP === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Password must be required');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (valueBSubmit !== 'Submit') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Incorrect Submit button content');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
}   else if (valueBReset !== 'Reset') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Incorrect Reset button content');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
}   else {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode('Validations results: every validation has passed');         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}  }