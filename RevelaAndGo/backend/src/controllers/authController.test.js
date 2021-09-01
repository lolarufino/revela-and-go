const controller = require('./authControllers');

let req;
let res;

describe('Given a registerUser', () => {
  describe('When is triggered', () => {
    test('Then a send must be called', () => {
      req = { user: null };
      res = { send: jest.fn() };

      controller.registerUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
