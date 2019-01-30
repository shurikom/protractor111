require('../Utilities/CustomLocators.js');
BankManagerPage = require('./BankManager.page.js');//one dot is direct parent, 2 dots 2 levels up
var AddCustomerPage = function(){

    this.customerForm = $("[name='myForm']");
    this.formLabels = $$('.form-group>label')
    this.firstNameInputBox = element(by.model('fName'));
    this.lastNameInputBox = element(by.model('lName'));
    this.postalCodeInputBox = element(by.model('postCd'));
    this.formRequiredFields = element.all(by.css("input:required"));
    this.formAddCustomerButton = $("button.btn-default");
    this.processButton = element(by.buttonText('Process'));

    this.goToAddCustomer = function(){
        BankManagerPage.addCustomerButton.click();//?
    }
}
module.exports = new AddCustomerPage();
