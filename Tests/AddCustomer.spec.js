require('../Utilities/CustomLocators.js');
var HomePage =  require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');

var Excel = require('exceljs');
var wb=new Excel.Workbook();
var sh;
var filePath="../TestData/CustomerList.xlsx";
var sheetName="Sheet1";
var accountNumbers=[];

var SelectHelper=require('../Utilities/Select.helper.js');
var customerSelectBox= new SelectHelper(by.id('userSelect'));
var currencySelectBox=new SelectHelper(by.id('currency'));

var using = require('jasmine-data-provider');

describe('Add Customer', () => {
    
    describe('Adding a Customer', () => {
        beforeAll(function(){
            wb.xlsx.readFile(filePath).then(function(){
            sh = wb.getWorksheet(sheetName);
             });
        });


        it('should display form for Adding Customer', () => {
            Base.navigateToHome();
            HomePage.managerLoginButton.click();
            AddCustomerPage.goToAddCustomer();
            expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
            expect(AddCustomerPage.formLabels.count()).toEqual(3);
        });

        it('should list all the labels', () => {
            expect(AddCustomerPage.formLabels.get(0).getText()).toEqual('First Name :');
            expect(AddCustomerPage.formLabels.get(1).getText()).toEqual('Last Name :');
            expect(AddCustomerPage.formLabels.get(2).getText()).toEqual('Post Code :');
        });

        it('should require firstname', () => {
            expect(AddCustomerPage.formRequiredFields.get(0)
            .getAttribute('required')).toEqual('true');
        });

        it('should require lastname', () => {
            expect(AddCustomerPage.formRequiredFields.get(1)
            .getAttribute('required')).toEqual('true');
        });

        it('should require postcode', () => {
            expect(AddCustomerPage.formRequiredFields.get(2)
            .getAttribute('required')).toEqual('true');
        });

        
         it('should add a new customer from Excel', () => {
            for (i=2;  i<=sh.rowCount; i++){
                AddCustomerPage.firstNameInputBox.sendKeys(sh.getRow(i).getCell(1).value);
                AddCustomerPage.lastNameInputBox.sendKeys(sh.getRow(i).getCell(2).value);
                AddCustomerPage.postalCodeInputBox.sendKeys(sh.getRow(i).getCell(3).value);
                AddCustomerPage.formAddCustomerButton.click();
                expect(browser.switchTo().alert().getText()).
                toContain('Customer added successfully with customer id :');
                browser.switchTo().alert().accept();
            }
         });

         it('should display newly created account', () => {
            BankManagerPage.openAccountButton.click();
            for(i=2; i<=sh.rowCount; i++){
            name=sh.getRow(i).getCell(1).value+' '+sh.getRow(i).getCell(2).value;
            expect(customerSelectBox.getOptions().getText()).toContain(name);  
            }  
         });


         it('should open Account for the new customer', () => {
            for(i=2; i<=sh.rowCount; i++){
            firstName= sh.getRow(i).getCell(1).value;
                customerSelectBox.selectByPartialText(firstName);
                currencySelectBox.selectByValue('Pound');
                AddCustomerPage.processButton.click();
                browser.switchTo().alert().getText().then(function(alertText){
                    expect(alertText).toContain('Account created successfully with account Number :');
                    myArr = alertText.split(" ");
                    myArr=myArr[myArr.length - 1].substr(1);
                    myArr=parseInt(myArr);
                    accountNumbers.push(myArr);
                    browser.sleep(1000);
                    browser.switchTo().alert().accept();  
                
                 });
            }
      });
    
         it('should write Account number to Excel', () => {
             for(i=2; i<=sh.rowCount; i++){
            sh.getRow(i).getCell(4).value = accountNumbers[i-2];	
            wb.xlsx.writeFile(filePath);	       
             }
         });

        });


    // xdescribe('Jasmine Data Provider ', () => {

    //         beforeAll(function(){
    //             Base.navigateToHome();
    //             HomePage.managerLoginButton.click();
    //             AddCustomerPage.goToAddCustomer();
    //         });

    //         function dataProvider(){
    //             return [
    //             {fName:"Elon", lName:'Musk',pCode:'334455'},
    //             {fName:"Warren", lName:'Buffet',pCode:'112233'},
    //             {fName:"Amanico", lName:'Ortega',pCode:'112233'}
    //         ]};

    //         using(dataProvider, function(data){
    //             it('should add customer: '+data.fName+' '+data.lName, () => {            
    //                     AddCustomerPage.firstNameInputBox.sendKeys(data.fName);
    //                     AddCustomerPage.lastNameInputBox.sendKeys(data.lName);
    //                     AddCustomerPage.postalCodeInputBox.sendKeys(data.pCode);
    //                     AddCustomerPage.formAddCustomerButton.click();
    //                     expect(browser.switchTo().alert().getText()).
    //                     toContain('Customer added successfully with customer id :');
    //                     browser.switchTo().alert().accept();
    //                     BankManagerPage.customersButton.click();
    //                     expect(Customers.getLastRowValue(1).getText()).toEqual(data.fName);
    //                     expect(Customers.getLastRowValue(2).getText()).toEqual(data.lName);
    //                     expect(Customers.getLastRowValue(3).getText()).toEqual(data.pCode);
    //                     AddCustomerPage.goToAddCustomer();
    //             });    
    //         });               
    //     });






});



//******************************* %%%%%%%%%%%%

// require('../Utilities/CustomLocators.js');//use require to import custom made locator[ng-click]
// var HomePage = require('../Pages/Home.page.js');//var-require is to find and import function from Home.page
// var BankManagerPage = require('../Pages/BankManager.page.js');//another require to find BankManager.page
// var Base = require('../Utilities/Base.js');
// var AddCustomerPage = require('../Pages/AddCustomerPage.page.js')
// var Customers = require('../Pages/Customers.page.js');
// var BankData = require('../TestData/BankData.json');

// describe('Add a Customer', () => {
    
//     describe('Adding a Customer', () => {
//         beforeAll(function(){
//             Base.navigateToHome();
//             HomePage.managerLoginButton.click();
//             AddCustomerPage.goToAddCuctomer();
//         });
//         it('should display form for Adding Customer', () => {
//             expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
//             expect(AddCustomerPage.formLabels.count()).toEqual(3);//checks boxes in the form
            
//         });
//         it('should list all the Labels', () => {
//             expect(AddCustomerPage.formLabels.get(0).getText()).toEqual('First Name :');
//             expect(AddCustomerPage.formLabels.get(1).getText()).toEqual('Last Name :');
//             expect(AddCustomerPage.formLabels.get(2).getText()).toEqual('Post Code :');
//         });
//         // required is a boolean attribute. 
//         // It means an <input> element can not be empty when submitting a form 
//         // if that <input> element has "required" attribute.
//         it('should require First Name', () => {//it's to test if boxes are has required options
//             expect(AddCustomerPage.formRequiredFields.get(0).getAttribute('required')).
//             toEqual('true');//returns (true) as a string NOT as a boolean
//             expect(AddCustomerPage.formRequiredFields.get(1).getAttribute('required')).
//             toEqual('true');
//             expect(AddCustomerPage.formRequiredFields.get(2).getAttribute('required')).
//             toEqual('true');
//         });
        
//         it('should add a Customer', () => {
//          for(i=0; i<BankData.customers.length; i++){
//             BankManagerPage.addCustomerButton.click();
//             BankManagerPage.firstNameInput.sendKeys(BankData.customers[i].fName);
//             BankManagerPage.lastNameInput.sendKeys(BankData.customers[i].lName);
//             BankManagerPage.postCodeInput.sendKeys(BankData.customers[i].pCode);
//             BankManagerPage.submitCustomerForm.click();
//             expect(browser.switchTo().alert().getText()).
//             toContain('Customer added successfully with customer id :')
//             browser.switchTo().alert().accept();
//             BankManagerPage.customerButton.click();
//             expect(Customers.getLastRowValue(1).getText()).toEqual(BankData.customers[i].fName);
//             expect(Customers.getLastRowValue(2).getText()).toEqual(BankData.customers[i].lName);
//             expect(Customers.getLastRowValue(3).getText()).toEqual(BankData.customers[i].pCode);
//             }
//         });

//         it('should have no account number for the user that was created', () => {
//             expect(Customers.getLastRowValue(4).getText()).toEqual('');
//         });


//     });


// });