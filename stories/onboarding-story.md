## Onboarding Story at BigCo, Inc.

### Purpose
When we add a new customer (we call them a `company` at BigCo, Inc) we have an _onboarding process_.

### Processing
The onboarding process is a series of steps where we collect important data, enter it into the system, and the system then generates key data records that we use throughout the life of our relationship with that `company`. The onboarding process is something that has been around a long time -- all done by hand -- and now we want to automate as much of the process as possible.

Each _onboarding experience_ starts by creating an onboarding record. Currently this is a physical folder we use to keep important information and we pass this folder around to all parties involved in the onboarding process steps. For the new API, we expect this onboarding record to be something the new API will create and manage.

The onboarding experience currently has the following key steps:

1. Create a new Onboarding Record
2. Collect and store Company information
3. Collect and store Account information
4. Collect and store Activity information
5. After review, either _accept_ or _reject_ the completed record.

Steps 2, 3, & 4 need to collect the same information we currently collect using the existing services (`company`, `account`, and `activity`). See those API assets for details.

### Data
Along with the collected information mentioned above, each Onboarding Record MUST also have a unique id, and a status field (active, pending, and closed). We also track the date/time the record was created and the date/time it was last updated.

### Actions
Typical actions for Onboarding records are, listOnboardingRecords, createOnboardingRecord, addCompanyInfo, addAccountInfo, addActivityInfo, approveOnboardingRecord(set status=`active`), and rejectOnboardingRecord(set status=`closed`). You cannot DELETE onboarding records. 
 
