import { mount } from '@vue/test-utils';
import Login from '../../src/views/Login.vue';

describe('Given a Login component', () => {
    describe('When is rendered', () => {
        test('Should render a Login text', () => {
            const wrapper = mount(Login)
              
            expect(wrapper.html()).toContain('<div class="login__email">')
          })
    })
})