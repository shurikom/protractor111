let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
i am adding new files on ALI
Bob is changing this file on conf
exports.config = {
    // to run tests in SAUCELABS
// sauceUser: 'shurikom',
// sauceKey: '7f73b1a8-5f83-4c1c-9bf5-4bd0e23b6780',
  

// multiCapabilities: [
//     {
//         Build: 'some-build-name',
//         BuildName: 'some-build-name',
//         name: 'chrome-tests-mac',
//         browserName: 'chrome',
//         version: '52',
//         platform: 'OS X 10.12',
//         shardTestFiles: true,
//         maxInstances: 25
//     }
// ],

 directConnect : true,
  
capabilities:{
  browserName:'chrome',
  browserName:'firefox'
},

  //  multiCapabilities: [
  //   //Parallel Testing with multiple browsers
  //   {browserName: 'chrome'},
  //   {browserName: 'firefox'}
  // ],
  sauceUser: 'shurikom',
 sauceKey: '7f73b1a8-5f83-4c1c-9bf5-4bd0e23b6780',
  
  
  specs: ['../Tests/AddCustomer.spec.js'], 

  // suites:{
  //   smoke: ['../Tests/BankManagerSimple.spec.js', '../Tests/demo.spec.js'],
  //   regression: ['../Tests/*.spec.js']
  // },

onPrepare: function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
        showstack: false
      }));
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: '../report/screenshots',
        preserveDirectory: false,
        screenshotsSubfolder: 'images',
         jsonsSubfolder: 'jsons',
         docName: 'CyberBank-Report.html'
     }).getJasmine2Reporter());
  
},
    
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 30000,    
        print: function() {}
        
}
};