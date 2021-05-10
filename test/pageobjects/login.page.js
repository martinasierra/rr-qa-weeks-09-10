import Page from './page';


class LoginPage extends Page {

    get inputEmail () { return $('input[name="email"]') }
    get emailError () { return $('.email p')}
    get inputPassword () { return $('[name="password"]') }
    get passError () { return $('.pass p')}
    get btnSubmit () { return $('input[name="submit"]') }    
    get formTitle () { return $('h2')}
    get otherFormLink () { return $('a') }
    get pEmail () { return $$('.validationDiv p')[0] }
    get pPassword () { return $$('.validationDiv p')[1] }
  
 
    open () {
        return super.open('login.html');
    }
}

export default new LoginPage();
