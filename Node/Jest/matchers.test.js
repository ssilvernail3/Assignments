describe('test matchers', function () {
    test('compare toBe and toEqual', function () {
        const nums = [3, 4, 5];
        const copy = [...nums];

        expect(copy).toEqual(nums);
        // expect(copy).toBe(nums);
    })

    test('playing with toContain Matcher', function () {
        const colors = ['red', 'orange'];
        expect(colors).toContain('red');
        expect('hello').toContain('hell');
   })
        
    test('toBeGreaterThan', function () {
        expect(7).toBeGreaterThanOrEqual(2); 
    })
    
    test('playing with boolean matchers', function () {
        expect('hi').toBeTruthy(); 
        expect('').toBeFalsy(); 
   })

    test('playing with any', function () {
        const randNum = Math.random() * 6;
        expect(randNum).toEqual(expect.any(Number));
        expect('randNum').toEqual(expect.any(String));
    });

    test('playing with not', function () {
        const numLives = 9;
        expect(numLives).not.toEqual(0);
        expect(numLives).not.toEqual(expect.any(Array));
    });
})



