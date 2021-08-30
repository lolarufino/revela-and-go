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
      test('Then a status must be called', async () => {
        Lab.find.mockRejectedValue({});
        await controllers.getAllLabs(req, res);
        expect(res.status).toHaveBeenCalled();
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
      test('Then a send must be called', async () => {
        Lab.findById.mockRejectedValue({});
        await controllers.getLabById(req, res);
        expect(res.status).toHaveBeenCalled();
      });
    });
  });
});
