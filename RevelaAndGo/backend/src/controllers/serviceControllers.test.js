const controller = require('./serviceControllers');
const Service = require('../models/serviceModel');

jest.mock('../models/serviceModel');

let req;
let res;
describe('Given a createService function', () => {
  beforeEach(() => {
    req = { body: null };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        Service.create.mockResolvedValue({});
        await controller.createService(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        Service.create.mockRejectedValue({});
        await controller.createService(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then send is called with an error', async () => {
        Service.create.mockRejectedValue(new Error('error'));
        await controller.createService(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});
