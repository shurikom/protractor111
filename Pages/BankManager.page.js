
require('../Utilities/CustomLocators.js');

var BankManagerPage = function(){

    this.addCustomerButton = element(by.ngClick('addCust()'));
    this.openAccountButton = element(by.ngClick('openAccount()'));
    this.customerButton = element(by.ngClick('showCust()'));
    this.addCustomerForm = $("[name='myForm']");
    this.firstNameText = $(".ng-invalid>div:nth-child(1)");
    this.lastNameText = $(".ng-invalid>div:nth-child(2)");
    this.postCodeText = $(".ng-invalid>div:nth-child(3)");
    this.firstNameInput = $(".ng-invalid>div:nth-child(1) input");
    this.lastNameInput = $(".ng-invalid>div:nth-child(2) input");
    this.postCodeInput = $(".ng-invalid>div:nth-child(3) input");
    this.submitCustomerForm = $("button.btn-default");
}
module.exports = new BankManagerPage();