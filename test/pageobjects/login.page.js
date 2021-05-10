import Page from './page';


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('input[type="email"]') }
    get inputPassword () { return $('[type="password"]') }
    get btnSubmit () { return $('input[type="submit"]') }    
    get pEmail () { return $$('.validationDiv p')[0] }
    get pPassword () { return $$('.validationDiv p')[1] }
    get otherFormLink () { return $('a') }
    get formTitle () { return $('h2')}
    get emailError () { return $('.email p')}
    get passError () { return $('.pass p')}

    open () {
        return super.open('login.html');
    }
}

export default new LoginPage();
