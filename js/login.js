function validate(){
    let hasForm = document.getElementsByTagName('form');
    let hasInputs = document.getElementsByTagName('input');
    let isRequiredE = document.getElementsByClassName("reqE").required;
    let isRequiredP = document.getElementsByClassName("reqP").required;
    const a = document.querySelector('a');a.hasAttribute('href');
    let valueHref = a.getAttribute('href');
    const buttonSignIn = document.querySelector('.button');
    buttonSignIn.hasAttribute('value');
    let valueButton = buttonSignIn.getAttribute('value');
    if (hasForm.length<1) { 
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Validations results: form is not found");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (hasInputs.length<3) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Missing input fields");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (isRequiredE === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Email must be required");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (isRequiredP === false) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Password must be required");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node); 
}   else if (valueHref !== 'register.html'){
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Incorrect href value");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);
}   else if (valueButton !== 'Sign In') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Incorrect button content");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
}   else {
    var node = document.createElement("li");                 
    var textnode = document.createTextNode("Validations results: every validation has passed");         
    node.appendChild(textnode);                             
    document.getElementById("myList").appendChild(node); 
}  }