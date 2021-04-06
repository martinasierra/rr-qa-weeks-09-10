function validate() {
    let hasForm = document.getElementsByTagName('form');
    let hasInputs = document.getElementsByTagName('input');
    const a = document.querySelector('a');
    a.hasAttribute('href');
    let valueHref = a.getAttribute('href');
    const buttonSubmit = document.getElementsByClassName('button');
    //buttonSubmit.hasAttribute('value');
    let valueButton = buttonSubmit.getAttribute('value');
    if (hasForm<=0) {
        var node = document.createElement("LI");                 
        var textnode = document.createTextNode("Form is not found");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
    }
else if (hasInputs.length<5) {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Missing input fields");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
    } 
else if (valueButton !== 'Submit') {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Incorrect button content");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
}
else {
        var node = document.createElement("li");                 
        var textnode = document.createTextNode("Validations results: every validation has passed");         
        node.appendChild(textnode);                             
        document.getElementById("myList").appendChild(node);  
    }
}
validate();