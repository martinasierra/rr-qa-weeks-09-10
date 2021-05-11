import Page from './page';


class RegisterPage extends Page {

    get inputEmail () { return $('input[name="email"]') }
    get emailError () { return $('.email p')}
    get inputPassword () { return $('[name="password"]') }
    get passError () { return $('.pass p')}
    get inputFullName () { return $('input[name="fullName"]')}
    get FNError () { return $('.fullName p')}
    get inputConfPass () { return $('input[name="cPassword"]')}
    get CPassError () { return $('.fullName p')}
    get btnReset () { return $('input[name="reset"]') } 
    get otherFormLink () { return $('a') }
    get formTitle () { return $('h2')}
    
    open () {
        return super.open('register.html');
    }

}

export default new RegisterPage();