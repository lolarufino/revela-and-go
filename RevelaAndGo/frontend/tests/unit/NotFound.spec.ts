import { mount } from '@vue/test-utils';
import NotFound from '../../src/views/NotFound.vue';

describe('Given a NotFound component', () => {
    describe('When is rendered', () => {
        test('Should render a notfound text', () => {
            const wrapper = mount(NotFound)
          
            const copyright = wrapper.get('[data-test="notfound"]')
          
            expect(copyright.text()).toBe('¡Uy! Aquí no hay nada.')
          })
    })
})