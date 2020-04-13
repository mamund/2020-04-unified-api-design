# Simple ToDo

## Purpose
We need to track 'ToDo' records in order to improve both timeliness and accuracy of customer follow-up activity.

## Data
In this first pass at the application, we need to keep track of the following data properties: 

 * **id** : a globally unique value for each ToDo record
 * **body** the text content of the ToDo record

## Actions
This edition of the application needs to support three actions:

 * **List** : return a list of all active ToDo records in the system
 * **Add** : add a new ToDo record to the system
 * **Remove** : remove a completed ToDo record from the system

NOTE: In this edition, we will not track any history of completed ToDo items.

## Rules
When creating a record, it is up to the client app to generate a unique value for the **id** property. The service MUST ensure the same **id** value is not used for more than one record.

