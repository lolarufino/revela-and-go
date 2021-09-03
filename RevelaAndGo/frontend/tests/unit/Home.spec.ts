import { mount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';

describe('Given a Home component', () => {
    describe('When is rendered', () => {
        test('Should render a welcome text', () => {
            const wrapper = mount(Home)
          
            const welcome = wrapper.get('[data-test="welcome"]')
          
            expect(welcome.text()).toBe('Revela & Go, es la web, en la que buscar dónde revelar tus fotografías analógicas, es más fácil.')
          })
    })
})