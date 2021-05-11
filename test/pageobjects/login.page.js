import Page from './page';


class LoginPage extends Page {

    
    get pEmail () { return $$('.validationDiv p')[0] }
    get pPassword () { return $$('.validationDiv p')[1] }
  
 
    open () {
        return super.open('login.html');
    }
}

export default new LoginPage();
