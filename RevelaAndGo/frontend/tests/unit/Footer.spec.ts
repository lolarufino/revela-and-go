import { mount } from '@vue/test-utils';
import Footer from '../../src/components/Footer.vue';

describe('Given a Footer component', () => {
    describe('When is rendered', () => {
        test('Should render a copyright text', () => {
            const wrapper = mount(Footer)
          
            const copyright = wrapper.get('[data-test="copyright"]')
          
            expect(copyright.text()).toBe('© Revela & Go 2021')
          })
    })
})
