const greetPeople = require("./greet-people")

test("print list of names prefixed with Hello", function() {
  // Arrange
  let  mentors = ['Irina', 'Ashleigh', 'Etza'];
  let expected = ["Hello Irina", "Hello Ashleigh", "Hello Etza"] 
  
  // Act
  let output = greetPeople(mentors)
  

  // Assert
  expect(output).toEqual(expected)
  
  
});


