export default class Page {
   

    get inputEmail () { return $('input[name="email"]') }
    get emailError () { return $('.email p')}
    get inputPassword () { return $('[name="password"]') }
    get passError () { return $('.pass p')}
    get btnSubmit () { return $('input[name="submit"]') }    
    get otherFormLink () { return $('a') }
    
    open (path) {
        return browser.url(`https://martinasierra.github.io/rr-qa-weeks-09-10/${path}`)
    }
}
