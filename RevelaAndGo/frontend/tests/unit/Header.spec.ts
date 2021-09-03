import { mount } from '@vue/test-utils';
import Header from '../../src/components/Header.vue';

describe('Given a Header component', ()=> {
    describe('When is rendered', ()=> {
        test('Should render the header html tag', () => {
            const wrapper = mount(Header)
          
            expect(wrapper.html()).toContain('<header class="header">')
        })
    })
})