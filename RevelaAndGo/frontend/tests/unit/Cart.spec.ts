import { mount } from '@vue/test-utils';
import Cart from '../../src/views/Cart.vue';

describe('Given a Cart component', () => {
    describe('When is rendered', () => {
        test('Should render a pagar text', () => {
            const wrapper = mount(Cart)
          
            const pay = wrapper.get('[data-test="pagar"]')
          
            expect(pay.text()).toBe('Pagar')
          })
    })
})