// require('../Utilities/CustomLocators.js');//use require to import custom made locator[ng-click]
// var HomePage = require('../Pages/Home.page.js');//var-require is to find and import function from Home.page
// var BankManagerPage = require('../Pages/BankManager.page.js');//another require to find BankManager.page
// var Base = require('../Utilities/Base.js');
// describe('Test Cases - Bank Manager', () => {

//     beforeEach(function(){
//         Base.navigateToHome();
//     });
    
//     it('should have correct page title', () => {
        
//         expect(browser.getTitle()).toBe("Protractor practice website - Banking App");
//     });
//     it('should display homepage button/header', () => {
//         expect(HomePage.homeButton.isDisplayed()).toBe(true);
//         expect(HomePage.homeButton.getText()).toEqual("Home");
//     });
//     it('should display page header', () => {
//         expect(HomePage.pageHeading.isDisplayed()).toBe(true);
//         expect(HomePage.pageHeading.getText()).toEqual("XYZ Bank");
//     });
//     it('should display login option for Bank Manager', () => {
//         expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
//         expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
//     });
//     it('should stay at homepage when Home Button is clicked', () => {
//         HomePage.homeButton.click();
//         expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
//         expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
        
//     });
//     it('should login & check if all 3 buttons are displayed @ Bank Manager Page', () => {
//         HomePage.managerLoginButton.click()
//         expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
//         expect(BankManagerPage.addCustomerButton.getText()).toBe('Add Customer');
//         expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
//         expect(BankManagerPage.openAccountButton.getText()).toBe('Open Account');
//         expect(BankManagerPage.customerButton.isDisplayed()).toBe(true);
//         expect(BankManagerPage.customerButton.getText()).toBe('Customers');
        
//     });
//     it('should click Home button and navigate back to home page', () => {
//         HomePage.managerLoginButton.click()
//         HomePage.homeButton.click();
//         expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login')
//     });
    
//     it('should display form for Adding Customer', () => {
//         HomePage.managerLoginButton.click()
//         BankManagerPage.addCustomerButton.click();
//         expect(BankManagerPage.addCustomerForm.isDisplayed()).toBe(true);
    
//     });
//     it('should list First Name, Lastname and Postcode on the form', () => {
//         HomePage.managerLoginButton.click()
//         BankManagerPage.addCustomerButton.click();
//         expect(BankManagerPage.firstNameText.getText()).toEqual('First Name :');
//         expect(BankManagerPage.lastNameText.getText()).toEqual('Last Name :');
//         expect(BankManagerPage.postCodeText.getText()).toEqual('Post Code :');
        
//     });
//     it('should require First Name, Lastname, Postcode on the form', () => {
//         HomePage.managerLoginButton.click()
//         BankManagerPage.addCustomerButton.click();
        
//         BankManagerPage.firstNameInput.click().sendKeys(protractor.Key.ENTER);
//         expect(BankManagerPage.firstNameInput.getAttribute('class')).toContain('ng-invalid-required');

//         BankManagerPage.lastNameInput.click().sendKeys(protractor.Key.ENTER);
//         expect(BankManagerPage.lastNameInput.getAttribute('class')).toContain('ng-invalid-required');
        
//         BankManagerPage.postCodeInput.click().sendKeys(protractor.Key.ENTER);
//         expect(BankManagerPage.postCodeInput.getAttribute('class')).toContain('ng-invalid-required');
//     });
//     it('should add a customer', () => {
//         HomePage.managerLoginButton.click()
//         BankManagerPage.addCustomerButton.click();
//         BankManagerPage.firstNameInput.sendKeys('Michael');
//         BankManagerPage.lastNameInput.sendKeys('Douglas');
//         BankManagerPage.postCodeInput.sendKeys('78750');
//         BankManagerPage.submitCustomerForm.click();
//         expect(browser.switchTo().alert().getText()).toContain('Customer added successfully with customer id :')
//         browser.switchTo().alert().accept();
//     });
// });

require('../Utilities/CustomLocators.js');//use require to import custom made locator[ng-click]
var HomePage = require('../Pages/Home.page.js');//var-require is to find and import function from Home.page
var BankManagerPage = require('../Pages/BankManager.page.js');//another require to find BankManager.page
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js')
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');
describe('Bank Manager', () => {
    
    describe('Manager Login', () => {
        beforeEach(function(){
                    Base.navigateToHome();
                });
                
                it('should have correct page title', () => {
                    
                    expect(browser.getTitle()).toBe("Protractor practice website - Banking App");
                });
                it('should display homepage button/header', () => {
                    expect(HomePage.homeButton.isDisplayed()).toBe(true);
                    expect(HomePage.homeButton.getText()).toEqual("Home");
                });
                it('should display page header', () => {
                    expect(HomePage.pageHeading.isDisplayed()).toBe(true);
                    expect(HomePage.pageHeading.getText()).toEqual(BankData.appData.bankName);
                });

                it('should display login option for Bank Manager', () => {
                    expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
                    expect(HomePage.managerLoginButton.getText()).toEqual(BankData.appData.bankManagerLoginButtonText);
                });
                it('should stay at homepage when Home Button is clicked', () => {
                    HomePage.homeButton.click();
                    expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
                    expect(HomePage.managerLoginButton.getText()).toEqual(BankData.appData.bankManagerLoginButtonText);
                    
                });
                it('should login & check if all 3 buttons are displayed @ Bank Manager Page', () => {
                    HomePage.managerLoginButton.click()
                    expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
                    expect(BankManagerPage.addCustomerButton.getText()).toBe('Add Customer');
                    expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
                    expect(BankManagerPage.openAccountButton.getText()).toBe('Open Account');
                    expect(BankManagerPage.customerButton.isDisplayed()).toBe(true);
                    expect(BankManagerPage.customerButton.getText()).toBe('Customers');
                    
                });
                it('should click Home button and navigate back to home page', () => {
                    HomePage.managerLoginButton.click()
                    HomePage.homeButton.click();
                    expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login')
                });
       
        
    });

   



});