const isValidPassword = require('./isValidPassword');

describe('Given a isValidPassword function', () => {
  describe('When is called', () => {
    test('Then should return a boolean', () => {
      const response = isValidPassword();
      expect(typeof response).toBe('boolean');
    });
  });
});
