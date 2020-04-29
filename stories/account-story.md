## Account Story at BigCo, Inc.

### Purpose
We keep track of purchasing accounts at BigCo, Inc. 

### Data
Each Account record has the division value, company identifier, spending limit, default discount percentage, and assigned SalesRep identifier. There is also a status value (suspended, active, pending, closed). We also track the date/time the record was created and the date/time it was last updated. Account records cannot be deleted. 

### Actions
Typical actions for Accounts are creating, editing, and closing. Additional actions include updating the spending limit and setting the default discount. You can also change the account status value. List filtering should be supported using status, spending-limit, discount, company-identifier, and salesRep-identifier.

### Processing
Each customer can one or more purchasing accounts. Accounts are tied to various divisions in the company and Customers (companies) need a purchase account for each division they do business with at BigCo, Inc.  Current divisions are Dry Goods, Hardware, Software, Grocery, Pharmacy, and Military.


