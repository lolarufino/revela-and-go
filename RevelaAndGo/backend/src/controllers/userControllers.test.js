const controller = require('./userControllers');
const User = require('../models/userModel');

jest.mock('../models/userModel');

let req;
let res;

describe('Given a createUser function', () => {
  beforeEach(() => {
    req = { body: {} };
    res = { status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        User.create.mockResolvedValue({});
        await controller.createUser(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        User.create.mockRejectedValue({});
        await controller.createUser(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then send is called with an error', async () => {
        User.create.mockRejectedValue(new Error('error'));
        await controller.createUser(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});

describe('Given a getUserById function', () => {
  beforeEach(() => {
    req = { params: { userId: null } };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        User.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue({})
          })
        });
        await controller.getUserById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        User.findById.mockRejectedValue({});
        await controller.getUserById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteById function', () => {
  beforeEach(() => {
    req = { params: { userId: null } };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        User.findByIdAndDelete.mockResolvedValue({});
        await controller.deleteById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        User.findByIdAndDelete.mockRejectedValue({});
        await controller.deleteById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then send is called with an error', async () => {
        User.findByIdAndDelete.mockRejectedValue(new Error('error'));
        await controller.deleteById(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});

describe('Given a updateUser function', () => {
  beforeEach(() => {
    req = { params: { userId: null }, body: {} };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        User.findByIdAndUpdate.mockResolvedValue({});
        await controller.updateUser(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        User.findByIdAndUpdate.mockRejectedValue({});
        await controller.updateUser(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then send is called with an error', async () => {
        User.findByIdAndUpdate.mockRejectedValue(new Error('error'));
        await controller.updateUser(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});
