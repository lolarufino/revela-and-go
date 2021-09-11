import { mount } from '@vue/test-utils';
import GuidedFilter from '../../src/views/GuidedFilter.vue';

describe('Given a GuidedFilter component', () => {
    describe('When is rendered', () => {
        test('Should render a choose text', () => {
            const wrapper = mount(GuidedFilter)
          
            expect(wrapper.html()).toContain('<p class="guidedfilter__title">Para encontrar el laboratorio que necesitas, elige entre cada una de las siguientes opciones:</p>')
          })
    })
})