import Page from './page';


class RegisterPage extends Page {

    get inputFullName () { return $('[name="fullName"]')}
    get FNError () { return $('.fullName p')}
    get inputConfPass () { return $('[name="cPassword"]')}
    get CPassError () { return $('.cPassword p')}
    get btnReset () { return $('[name="reset"]') } 
    get pEmail () { return $$('.validationDiv p')[0] }
    get pFullName () { return $$('.validationDiv p')[1]}
    get pPassword () { return $$('.validationDiv p')[2]} 

    open () {
        return super.open('register.html');
    }

}

export default new RegisterPage();