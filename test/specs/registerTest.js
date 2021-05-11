import RegisterPage from '../pageobjects/register.page'

describe('Register Form', () => {
    
    describe('Email Input', () => {
   
        it('should show invalid mail message', () => {
            RegisterPage.open();
            RegisterPage.inputEmail.setValue('hola');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.emailError).toBeExisting();
        });
    
        it('should\'t show any error message', () => {
            RegisterPage.open();
            RegisterPage.inputEmail.setValue('email@jasper.info');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.emailError).not.toBeExisting();
        });
    });
 
    describe('Full Name input', () => {

        it('should show invalid full name message', () => {
            RegisterPage.open();
            browser.pause(2000);
            RegisterPage.inputFullName.setValue('Jason');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.FNError).toBeExisting();
        })

        it('should\'t show any error message', () => {
            RegisterPage.open();
            browser.pause(2000);
            RegisterPage.inputFullName.setValue('Jason James');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.FNError).not.toBeExisting();
        });
    });

    describe('Password Input', () => {
   
        it('should show invalid password message', () => {
            RegisterPage.open();
            browser.pause(2000);
            RegisterPage.inputPassword.setValue('abcd');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.passError).toBeExisting();
        });

        it('should\'t show any error message', () => {
            RegisterPage.open();
            browser.pause(2000);
            RegisterPage.inputPassword.setValue('0987ytre');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.passError).not.toBeExisting();
        });

    });

    describe('Confirm Password Input', () => {
   
        it('should show invalid password message', () => {
            RegisterPage.open();
            browser.pause(2000);
            RegisterPage.inputConfPassword.setValue('abcd');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.CPassError).toBeExisting();
        });

        it('should\'t show any error message', () => {
            RegisterPage.open();
            browser.pause(2000);
            RegisterPage.inputConfPassword.setValue('0987ytre');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.CPassError).not.toBeExisting();
        });

    });

    describe('Login link', () => {
       
        it('should redirect to Login page', () => {
            RegisterPage.otherFormLink.click();
            browser.pause (2000);
            expect(RegisterPage.formTitle.getText()).toEqual('Sign In');
        });
    })
});


