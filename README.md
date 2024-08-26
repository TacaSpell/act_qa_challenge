# BDD TEST-CASES

# LOGIN FEATURE

## EMPTY EMAIL
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is empty  
and the Password field is empty  
and the "Sign in" button is clicked  
Then an error message is displayed: "An email address required"

## INVALID EMAIL
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is filled with an invalid email  
and the "Sign in" button is clicked  
Then an error message is displayed: "Invalid email address"

## AUTHENTICATION FAILURE
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is filled with unregistered email  
and the Password field is filled
and the "Sign in" button is clicked  
Then an error message is displayed: "Authentication failed"

## SUCCESSFUL LOGIN
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is filled correctly  
and the Password field is filled correctly  
and the "Sign in" button is clicked  
Then the user's logged-in area is loaded [http://www.automationpractice.pl/index.php?controller=my-account](http://www.automationpractice.pl/index.php?controller=my-account)

## ACCESS LOGGED-IN AREA URL WITHOUT AUTHENTICATION
Given I am an unauthenticated user  
When accessing the URL [http://www.automationpractice.pl/index.php?controller=my-account](http://www.automationpractice.pl/index.php?controller=my-account)  
Then the login page is loaded [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)

## LOGOUT
Given I am an authenticated user  
When the "Sign out" button is clicked  
Then the user is redirected to the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses)

# REGISTRATION FEATURE

## EMPTY EMAIL
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is empty  
and the "Create an account" button is clicked  
Then an error message is displayed: "Invalid email address"

## INVALID EMAIL
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field contains an invalid email  
and the "Create an account" button is clicked  
Then an error message is displayed: "Invalid email address"

## EMAIL ALREADY REGISTERED
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is filled with an existing email  
and the "Create an account" button is clicked  
Then an error message is displayed: "An account using this email address has already been registered. Please enter a valid password or request a new one"

## CREATE ACCOUNT
Given I am on the login page [http://www.automationpractice.pl/index.php?controller=authentication&back=my-account](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)  
When the Email address field is filled with a valid email  
and the "Create an account" button is clicked  
Then the additional data form is loaded [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)

## MISSING REQUIRED FIELDS
Given I am on the additional data page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)  
When the "Register" button is clicked  
Then an error message is displayed listing the required fields

## INVALID NAME
Given I am on the additional data page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)  
When the name field is filled with an invalid name  
and the "Register" button is clicked  
Then an error message is displayed: "firstname is invalid"

## INVALID EMAIL
Given I am on the additional data page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)  
When the email field is filled with an existing email  
and the "Register" button is clicked  
Then an error message is displayed: "An account using this email address has already been registered"

## EXISTING EMAIL
Given I am on the additional data page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)  
When the email field is filled with an invalid email  
and the "Register" button is clicked  
Then an error message is displayed: "email is invalid"

## INVALID PASSWORD
Given I am on the additional data page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)  
When the password field is filled with an invalid password  
and the "Register" button is clicked  
Then an error message is displayed: "passwd is invalid"

## COMPLETE REGISTRATION
Given I am on the additional data page [http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation](http://www.automationpractice.pl/index.php?controller=authentication&back=addresses#account-creation)  
When all required fields are filled out correctly  
and the "Register" button is clicked  
Then the user's logged-in area is loaded [http://www.automationpractice.pl/index.php?controller=my-account](http://www.automationpractice.pl/index.php?controller=my-account)  
and a message is displayed: "Your account has been created"