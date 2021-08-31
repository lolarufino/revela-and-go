const controllers = require('./labControllers');
const Lab = require('../models/labModel');

jest.mock('../models/labModel');

let req;
let res;

describe('Given a getAllLabs function', () => {
  beforeEach(() => {
    req = { query: null };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then a send must be called', async () => {
        Lab.find.mockResolvedValue({});
        await controllers.getAllLabs(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then a status must be called with 500', async () => {
        Lab.find.mockRejectedValue({});
        await controllers.getAllLabs(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then send is called with an error', async () => {
        Lab.find.mockRejectedValue(new Error('error'));
        await controllers.getAllLabs(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});

describe('Given a getLabById function', () => {
  beforeEach(() => {
    req = { labId: null };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then a send must be called', async () => {
        Lab.findById.mockResolvedValue({});
        await controllers.getLabById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then a send must be called with 500', async () => {
        Lab.findById.mockRejectedValue({});
        await controllers.getLabById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then send is called with an error', async () => {
        Lab.findById.mockRejectedValue(new Error('error'));
        await controllers.getLabById(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});
