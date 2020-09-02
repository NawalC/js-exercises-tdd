function getEven(numbers) {
  // return numbers.filter(function(number) {
  //   return number % 2 === 0;
  // });

  let filteredArray= numbers.filter(function(number) {

    return number > 0; 
     });
    return  filteredArray.filter(num=> num % 2 === 0)
}

module.exports = getEven;
