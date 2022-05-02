const { square, cube } = require('./square');


describe('square function ', function () {
    test('square should square a number', function () {
        const res = square(3);
        expect(res).toEqual(9);
    });
    
    test('square should square a neg number', function () {
        const num = square(-9);
        expect(num).toEqual(81);
    }); 
})


describe('cube function', function () {
    test('cube should cube a number', function () {
        const num1 = cube(3);
        expect(num1).toEqual(27);
        const num2 = cube(-4);
        expect(num2).toEqual(-64);
    });
});