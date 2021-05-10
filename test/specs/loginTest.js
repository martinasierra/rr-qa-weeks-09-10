import LoginPage from '../pageobjects/login.page';

describe('Login Form', () => {
   
    describe('Email Input'), () => {
   
        it('wrong email', () => {
            LoginPage.open();
            LoginPage.inputEmail.setValue('hola');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(LoginPage.emailError).toBeExisting();
        });
    
        it('right email', () => {
            LoginPage.open();
            LoginPage.inputEmail.setValue('email@jasper.info');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(LoginPage.emailError).not.toBeExisting();
        });
    };

    describe('Password Input'), () => {
   
        it('wrong pass', () => {
            LoginPage.open();
            browser.pause(2000);
            LoginPage.inputPassword.setValue('1234');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(LoginPage.passError).toBeExisting();
        });

        it('right pass', () => {
            LoginPage.open();
            browser.pause(2000);
            LoginPage.inputPassword.setValue('0987ytre');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(LoginPage.passError).not.toBeExisting();
        });

    };

    describe('Submit Button'), () => {

        it('should show sign with valid email and password when signing in ', () => {
            LoginPage.open();
            LoginPage.inputEmail.setValue('hola@gmail.com');
            LoginPage.inputPassword.setValue('1234rtyu');
            browser.keys("\uE004");
            browser.keys("\uE007");
            browser.pause(2000);
            expect(LoginPage.pEmail).toHaveText('Email: hola@gmail.com');
            expect(LoginPage.pPassword).toHaveText('Password: 1234rtyu');
        });

    };

    describe('Register link'), () => {

        it('should redirect to register page', () => {
            LoginPage.otherFormLink.click();
            browser.pause (2000);
            expect(LoginPage.formTitle.getText()).toEqual('Create an account');
        });
    
    };


   
});