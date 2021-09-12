import state from '@/store/state';

describe('Given a state', () => {
    describe('When is called', () => {
        test('Should be equal to the real state', () => {
            expect(state).toEqual({
                labs: [],
                user: '',
                userId: '',
                cartId: '',
                serviceId: '',
                token: '',
                refreshToken: '',
                lab: {},
                finalService: [],
                service: {},
                price: 0,
                isLoggedIn: false,
                value: []
            })
        })
    })
})