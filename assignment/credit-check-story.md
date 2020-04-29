## Credit Check Story at BigCo, Inc.

### Purpose
We run a simple credit check periodically on companies that are our customers to update their bsaseline spending limit and discount percentages.

### Data
Each company record has one or more `account` records. Each `account` record as a `spendingLimit` property and a `discountPercentage` property. By default these two values are set to `5000` and `5%`, respectively. However, we can modify those values by running a simple credit check using the customer name to see if we need to adjust those values up or down.

We have an internal account history that is used to generate suggested ratings for companies we deal with. The details on how we generate these numbers is kept secret. 

### Actions
The credit check service has a safe method (`checkCredit`) which accepts a `companyName` and returns a `rating` (a single value between 1 and 10).  That `rating` value can then be used to determine BigCo's standard `spendingLimit` and `discountPercentage` for that company's account record. 

### Processing
Each time the credit-check service is queried, it also writes a history record that can be called up later for review. History is recalled using the same `companyName` that was used when making the initial credit check. History records contain the following properties: `identifier`, `companyName`, `dateRequested`, and `rating`.

We run this credit-check when we first add a company account record and once a year after that (always on January 1st).  


