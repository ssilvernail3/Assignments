const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('test noon', () => {
  test('to see if it is noon', () => {
    expect(timeWord(12, '00').toEqual('noon'));
  });
});
describe('test midnight', () => {
  test('to see if it is midnight', () => {
    expect(timeWord('00', '00').toEqual('midnight'));
  });
});
describe('test 1PM', () => {
  test('to see if it is 1 o`clock pm', () => {
    expect(timeWord(13, '00').toEqual('one o`clock pm'));
  });
});
describe('doesnt workd', () => {
  test('to see if nums outisde of range', () => {
    expect(timeWord(44, '00').toEqual(undefined));
  });
});


