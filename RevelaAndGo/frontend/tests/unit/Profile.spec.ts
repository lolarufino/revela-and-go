import { mount } from '@vue/test-utils';
import Profile from '../../src/views/Profile.vue';

describe('Given a Profile component', () => {
    describe('When is rendered', () => {
        test('Should render a nombre text', () => {
            const wrapper = mount(Profile)
          
            const name = wrapper.get('[data-test="userName"]')
          
            expect(name.text()).toBe('Nombre:')
          })
    })
})