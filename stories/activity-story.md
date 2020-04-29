## Activity Story at BigCo, Inc.

### Purpose
We keep track of company & account customer service activity at BigCo, Inc. 

### Data
Each activity record has the activity type, `company identifier, account identifier, date/time scheduled, and notes properties. There is also a status value (`suspended`, `active`, `pending`, `closed`). We also track the date/time the record was created and the date/time it was last updated. 

### Actions
Typical actions for activities are creating, editing, and closing (with notes).  You can also change the status value. You cannot delete activity records. List filtering should be supported using status, company identifier, and account identifier.

### Processing
Each company or company/account pair has one or more associated activity records. These records list the ways (and reasons) BigCo staff will be contacting the company on various matters. It acts as both a contact scheduler and log. Current activity type values are `email`, `inperson`, `phone`, and `letter`. Other types might be added in the future.


