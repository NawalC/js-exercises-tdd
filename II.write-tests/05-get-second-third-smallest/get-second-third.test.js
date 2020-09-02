const getSecondThird = require('./get-second-third')

test("get second and third number from an array", function(){
    //arrange

    let input = [90, 5, 11, 8, 6];
    let expected = [6, 8];

    //act

    let output = getSecondThird(input)

    //assert
    expect(output).toEqual(expected)
})

test("get second and third number from an array with negative nums", function(){
    //arrange

    let input = [90, 5, 11, -8, -6];
    let expected = [-6, 5];

    //act

    let output = getSecondThird(input)

    //assert
    expect(output).toEqual(expected)
})

test("get second and third number from an array with decimal nums", function(){
    //arrange

    let input = [90.9, 5, 11, 6.8, 6.6];
    let expected = [6.6, 6.8];

    //act

    let output = getSecondThird(input)

    //assert
    expect(output).toEqual(expected)
})
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
