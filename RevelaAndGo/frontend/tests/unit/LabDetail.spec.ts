import { mount } from '@vue/test-utils';
import LabDetail from '../../src/views/LabDetail.vue';

describe('Given a LabDetail component', () => {
    describe('When is rendered', () => {
        test('Should render a address text', () => {
            const wrapper = mount(LabDetail)
          
            const address = wrapper.get('[data-test="address"]')
          
            expect(address.text()).toBe('Dirección:')
          })
    })
})