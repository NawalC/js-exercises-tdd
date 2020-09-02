var addAllnumbers = require("./add-numbers");

// test("Add all numbers", function() {
//   var numbers = [9, 23, 10, 3, 8];
//   var expected = 53;

//   var output = addAllnumbers(numbers);

//   expect(output).toEqual(expected);
// });

// test("Add all numbers including negative num", function() {
//   var numbers = [9, 23, 10, 3, -8];
//   var expected = 45;

//   var output = addAllnumbers(numbers);

//   expect(output).toEqual(expected);
// });

test("Add all numbers including decimals", function() {
  var numbers = [9, 23, 10, 3.3, 8];
  var expected = 53.3;

  var output = addAllnumbers(numbers);

  expect(output).toEqual(expected);
});