import RegisterPage from '../pageobjects/register.page'

describe('Register Form', () => {
    it('should login with valid credentials',  () => {
        
    });
});

it('should redirect to login page', () => {
    LoginPage.otherFormLink.click();
    browser.pause (2000);
    expect(LoginPage.formTitle.getText()).toEqual('Sign In');
});

