import Page from './page';


class RegisterPage extends Page {



open () {
    return super.open('login.html');
}

}

export default new RegisterPage();