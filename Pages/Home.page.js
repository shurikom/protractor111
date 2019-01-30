//since we use custom made locator [ng-click],we require data from that folder
require('../Utilities/CustomLocators.js');
//create a function for Home page (with new pages we need to create separate functions)
var HomePage = function(){
    //your elements and methods should start with (this.)
    this.homeButton = $("button.home");
    this.managerLoginButton = element(by.ngClick('manager()'));
    this.pageHeading = $(".mainHeading");
    
}
module.exports = new HomePage();//creating a new instance that will be ready for export
// module.exports is used to export your file. Which means, 
// with this code you can use your function in another file.
// But, you have to use require also. They work together.
// you have to write require code where you want to use your function.