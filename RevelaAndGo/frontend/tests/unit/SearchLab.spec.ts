import { mount } from '@vue/test-utils';
import SearchLab from '../../src/views/SearchLab.vue';

describe('Given a SearchLab component', () => {
    describe('When is rendered', () => {
        test('Should render a found labs text', () => {
            const wrapper = mount(SearchLab)
          
            expect(wrapper.html()).toContain('<p class="labslist__header" data-test="foundlabs"> Estos son los laboratorios que corresponden a tu búsqueda:</p>')
          })
    })
})