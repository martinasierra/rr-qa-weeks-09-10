import LoginPage from '../pageobjects/login.page';

describe('Login Form', () => {
   
    describe('Email Input', () => {
   
        it('should show invalid mail message', () => {
            LoginPage.open();
            LoginPage.inputEmail.setValue('hello');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(LoginPage.emailError).toBeExisting();
        });
    
        it('should\'t show any error message', () => {
            LoginPage.open();
            LoginPage.inputEmail.setValue('email@jasper.info');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(LoginPage.emailError).not.toBeExisting();
        });
    });

    describe('Password Input', () => {
   
        it('should show invalid password message', () => {
            LoginPage.open();
            LoginPage.inputPassword.setValue('1234');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(LoginPage.passError).toBeExisting();
        });

        it('should\'t show any error message', () => {
            LoginPage.open();
            LoginPage.inputPassword.setValue('0987ytre');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(LoginPage.passError).not.toBeExisting();
        });

    });

    describe('Submit Button', () => {

        it('should show message with valid email and password when signing in ', () => {
            LoginPage.open();
            LoginPage.inputEmail.setValue('hello@gmail.com');
            LoginPage.inputPassword.setValue('1234rtyu');
            browser.keys("\uE004");
            browser.keys("\uE007");
            browser.pause(1000);
            expect(LoginPage.pEmail).toHaveText('Email: hello@gmail.com');
            expect(LoginPage.pPassword).toHaveText('Password: 1234rtyu');
        });

    });

    describe('Register link', () => {

        it('should redirect to Register page', () => {
            LoginPage.otherFormLink.click();
            browser.pause (1000);
            expect(browser).toHaveUrl('https://martinasierra.github.io/rr-qa-weeks-09-10/register.html');
        });
    
    });

   
});