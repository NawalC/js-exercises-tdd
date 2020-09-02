const getEven = require('./get-even-numbers')
test('get even numbers', function(){
    //arrange
    let input= [22, 13, 73, 82, 4];
    let expected= [22, 82, 4];

    //act
    let output= getEven(input)

    //assert

    expect(output).toEqual(expected)
})

test('get even numbers with decimals', function(){
    //arrange
    let input= [22.3, 13.5, 73, 82, 45];
    let expected= [82];

    //act
    let output= getEven(input)

    //assert
    expect(output).toEqual(expected)
})

test('get even numbers with negative numbers', function(){
    //arrange
    let input= [-22, 12, 73, 82, -44];
    let expected= [ 12, 82];

    //act
    let output= getEven(input)

    //assert
    expect(output).toEqual(expected)
})
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
