require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given('I have already account on website', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'I am already user of website');
    });

    When('I am on the home page', function () {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get('http://localhost:3000/');
        var xpath = "//*[contains(text(),'Express')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);

    });

    When('click on the {stringInDoubleQuotes} link', function (text) {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.findElement(seleniumWebdriver.By.name(text)).then(function(element) {
            return element.click();
        });
    });

    Then('I should redirect on the login page', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'User Login')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);

    });
});