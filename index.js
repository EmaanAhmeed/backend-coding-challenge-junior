const orders = require('./sampleData.json');
const { getSalesByDay } = require('./challenge');
const assert = require('assert')


let startDate = new Date(2022, 0, 20).getTime(), endDate = new Date(2022, 1, 3).getTime();
let sales = getSalesByDay(orders, startDate, endDate);

try {
  assert.deepEqual(sales, [0, 0, 0, 0, 0, 700, 876, 0, 0, 291, 0, 0, 0, 0]);
  console.log('Passed!')
}
catch (e) {
  console.log('Incorrect output!')
}
