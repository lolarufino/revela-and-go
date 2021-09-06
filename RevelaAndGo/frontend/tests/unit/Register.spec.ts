import { mount } from '@vue/test-utils';
import Register from '../../src/views/Register.vue';

describe('Given a Register component', () => {
    describe('When is rendered', () => {
        test('Should render a registrarse text', () => {
            const wrapper = mount(Register)
          
            expect(wrapper.html()).toContain('<div class="register__email">')
          })
    })
})