# PacknSave Coding challenge

Thank you for taking the time to face this coding challenge.
It should take less than one hour to complete this challenge, however there is no time limit so take as much time as you need.
Good luck!

Task: Implement the getSalesByDay function.

## Background

The function basically implements the concept of "group by" present in most databases.
The sampleData.json file attached includes a sample of orders, each order having 2 fields: date, and value. The "date" field is a timestamp of order creation date and "value" is the amount paid.
The getSalesByDay functions takes 3 arguments:
 .orders: a list of orders to aggregate
 .startDate: first day to calculate the sum for
 .endDate: last day to calculate the sum for

Your task is to group orders by day and return the sum of order values for each day within the date range given, and return 0 if no orders have been made in the day.

Example: if startDate is 15 Dec 2021 and endDate is 20 Dec 2021, then the getSalesByDay function should return an array with 6 elements corresponding to the 6 days
   15/12/2021, 16/12/2021, 17/12/2021, 18/12/2021, 19/12/2021, and 20/12/2021,
   each element containing the sum of order values for orders created in the day

The index file contains a simple test to validate the code, you can use it to make sure your logic is sound

## Restrictions

You are not allowed to use external libraries, the challenge is meant to evaluate your ability to manipulate data, work with dates, and write an efficient algorithm.

## Deliverables

- Use Github or Bitbucket to share your code
