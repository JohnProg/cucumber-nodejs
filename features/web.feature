Feature: User List
As a user of website.
I able to login with username and password
So I can see list of products.

Scenario: Login
  Given I am on the login page with "User Login" title
  When I add correct "uname" and "password"
  And click on the "submit" button
  Then I should redirect on the user listing page

