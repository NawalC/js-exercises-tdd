const getLargestNumber = require('./largest-number') 

test(" get the largest number", function(){
    //arrange
    let input= [3, 21, 88, 4, 36];
    let expected = 88;

    //act
    let output = getLargestNumber(input)

    //assert
    expect(output).toEqual(expected)
})

test(" get the largest number including negative nums", function(){
    //arrange
    let input= [-3, -21, -88, -4, -36, -100];
    let expected = -3;

    //act
    let output = getLargestNumber(input)

    //assert
    expect(output).toEqual(expected)
})

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
