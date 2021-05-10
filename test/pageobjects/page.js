/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  
   

    open (path) {
        return browser.url(`file:///C:/Users/Martina/Desktop/RR_BAQA/rr-qa-weeks-09-10/${path}`)
    }
}
