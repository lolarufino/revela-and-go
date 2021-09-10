const controllers = require('./cartControllers');
const Cart = require('../models/cartModel');

jest.mock('../models/cartModel');

let req;
let res;

describe('Given a createCart function', () => {
  beforeEach(() => {
    req = { body: null };
    res = { status: jest.fn(), send: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And is resolved', () => {
      test('Then a send must be called', async () => {
        Cart.create.mockResolvedValue({});
        await controllers.createCart(req, res);
        expect(res.send).toHaveBeenCalled();
      });
      test('Then a send must be called', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockReturnValue({
            populate: jest.fn().mockResolvedValue({})
          })
        });
        await controllers.createCart(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And is rejected', () => {
      test('Then a status must be called with 500', async () => {
        Cart.create.mockRejectedValue({});
        await controllers.createCart(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then a send must be called with an error', async () => {
        Cart.create.mockRejectedValue(new Error('error'));
        await controllers.createCart(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
      test('Then a status must be called with 500', async () => {
        Cart.findById.mockRejectedValue({});
        await controllers.createCart(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then a send must be called with an error', async () => {
        Cart.findById.mockRejectedValue(new Error('error'));
        await controllers.createCart(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});

describe('Given a getCartById function', () => {
  beforeEach(() => {
    req = { params: { cartId: null } };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockResolvedValue({})
        });
        await controllers.getCartById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue({})
        });
        await controllers.getCartById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
      test('Then a send must be called with an error', async () => {
        Cart.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue(new Error('error'))
        });
        await controllers.getCartById(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
    });
  });
});

describe('Given a updateCartById', () => {
  beforeEach(() => {
    req = { params: { cartId: null }, body: null };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        Cart.findByIdAndUpdate.mockReturnValue({
          populate: jest.fn().mockResolvedValue({})
        });
        await controllers.updateCartById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a status must be called with 500', async () => {
        Cart.findByIdAndUpdate.mockReturnValue({
          populate: jest.fn().mockRejectedValue({})
        });
        await controllers.updateCartById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});

describe('Given a deleteCartById', () => {
  beforeEach(() => {
    req = { params: { cartId: null } };
    res = { send: jest.fn(), status: jest.fn() };
  });
  describe('When is triggered', () => {
    describe('And it is resolved', () => {
      test('Then a send must be called', async () => {
        Cart.findByIdAndDelete.mockResolvedValue({});
        await controllers.deleteCartById(req, res);
        expect(res.send).toHaveBeenCalled();
      });
    });
    describe('And it is rejected', () => {
      test('Then a send must be called with an error', async () => {
        Cart.findByIdAndDelete.mockRejectedValue(new Error('error'));
        await controllers.deleteCartById(req, res);
        expect(res.send.mock.calls[0][0].message).toBe('error');
      });
      test('Then a status must be called with 500', async () => {
        Cart.findByIdAndDelete.mockRejectedValue({});
        await controllers.deleteCartById(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
});
