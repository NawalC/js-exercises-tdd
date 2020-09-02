function getLargestNumber(array) {
  var largestNumber;
  // for (var i = 0; i < array.length - 1; i++) {
  //   if (array[i] > array[i + 1]) {
  //     largestNumber = array[i];
  //   }
  // }
  // return largestNumber;
  const sortedArray=  array.sort((a,b)=> a-b)
 
 return sortedArray[sortedArray.length -1]
 
}

module.exports = getLargestNumber;
