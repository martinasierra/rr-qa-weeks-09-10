import RegisterPage from '../pageobjects/register.page'

describe('Register Form', () => {
    
    describe('Email Input', () => {
   
        it('should show invalid mail message', () => {
            RegisterPage.open();
            RegisterPage.inputEmail.setValue('hola');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(RegisterPage.emailError).toBeExisting();
        });
    
        it('should\'t show any error message', () => {
            RegisterPage.open();
            RegisterPage.inputEmail.setValue('email@jasper.info');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(RegisterPage.emailError).not.toBeExisting();
        });
    });
 
    describe('Full Name input', () => {

        it('should show invalid full name message', () => {
            RegisterPage.open();
            browser.pause(1000);
            RegisterPage.inputFullName.setValue('Jason');
            browser.keys("\uE004");
            browser.pause(1000);
            expect(RegisterPage.FNError).toBeExisting();
        })

        it('should\'t show any error message', () => {
            RegisterPage.open();
            browser.pause(1000);
            RegisterPage.inputFullName.setValue('Jason James');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.FNError).not.toBeExisting();
        });
    });

    describe('Password Input', () => {
   
        it('should show invalid password message', () => {
            RegisterPage.open();
            browser.pause(1000);
            RegisterPage.inputPassword.setValue('abcd');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.passError).toBeExisting();
        });

        it('should\'t show any error message', () => {
            RegisterPage.open();
            browser.pause(1000);
            RegisterPage.inputPassword.setValue('0987ytre');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.passError).not.toBeExisting();
        });

    });

    describe('Confirm Password Input', () => {
   
        it('should show invalid password message', () => {
            browser.pause(2000);
            RegisterPage.inputConfPass.setValue('0987ytre');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.CPassError).not.toBeExisting();
        });
       
        it('should show passwords do not message', () => {
            browser.pause(2000);
            RegisterPage.inputConfPass.setValue('abcd');
            browser.keys("\uE004");
            browser.pause(2000);
            expect(RegisterPage.CPassError).toBeExisting();
        });

    });

    describe('Login link', () => {
       
        it('should redirect to Login page', () => {
            RegisterPage.otherFormLink.click();
            browser.pause (2000);
            expect(browser).toHaveUrl('https://martinasierra.github.io/rr-qa-weeks-09-10/login.html');
        });
    });

    describe('Reset Button', () => {

        it('should clear all fields', () => {
            RegisterPage.open();
            RegisterPage.inputEmail.setValue('hola@martina.net');
            RegisterPage.inputFullName.setValue('Martina ');
            RegisterPage.inputPassword.setValue('0987ytre');
            RegisterPage.inputConfPass.setValue('0987ytre');
            RegisterPage.btnReset.click();
            browser.pause(2000);
            expect(RegisterPage.inputEmail).toHaveText('');
            expect(RegisterPage.inputFullName).toHaveText('');
            expect(RegisterPage.inputPassword).toHaveText('');
            expect(RegisterPage.inputConfPass).toHaveText('');
            
        });
    });


    describe('Submit Button', () => {

        it('should show message with valid email, full name and password when registering in ', () => {
            RegisterPage.open();
            RegisterPage.inputEmail.setValue('don@draper.net');
            RegisterPage.inputFullName.setValue('Don Draper');
            RegisterPage.inputPassword.setValue('0987ytre');
            RegisterPage.inputConfPass.setValue('0987ytre');
            RegisterPage.btnSubmit.click();
            expect(RegisterPage.pEmail).toHaveText('Email: don@draper.net');
            expect(RegisterPage.pFullName).toHaveText('Full Name: Don Draper');
            expect(RegisterPage.pPassword).toHaveText('Password: 0987ytre');
        });

    }); 
});


