import { mount } from '@vue/test-utils';
import Register from '../../src/views/Register.vue';

describe('Given a Register component', () => {
    describe('When is rendered', () => {
        test('Should render a registrarse text', () => {
            const wrapper = mount(Register)
          
            const name = wrapper.get('[data-test="register"]')
          
            expect(name.text()).toBe('Registrarse')
          })
    })
})