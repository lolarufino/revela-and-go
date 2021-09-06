import { mount } from '@vue/test-utils';
import LabsList from '../../src/components/LabsList.vue';

describe('Given a LabsList component', () => {
    describe('When is rendered', () => {
        test('Should render a found labs text', () => {
            const wrapper = mount(LabsList)
          
            const foundlabs = wrapper.get('[data-test="foundlabs"]')
          
            expect(foundlabs.text()).toBe('Estos son los laboratorios que corresponden a tu búsqueda:')
          })
    })
})