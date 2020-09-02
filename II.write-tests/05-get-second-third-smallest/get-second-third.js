module.exports = function(array) {
  //const newArray = array.slice();
  array.sort(function(x, y) {
    return x - y;
  });
  return [array[1], array[2]];
};
