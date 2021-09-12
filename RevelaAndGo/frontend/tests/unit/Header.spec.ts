import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Header from '../../src/components/Header.vue';

describe('Given a Header component', ()=> {
    describe('When is rendered', ()=> {
        test('Should render the header html tag', () => {
            const wrapper = mount(Header, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                    },
                  },
                },
              })
          
            expect(wrapper.html()).toContain('<header class="header">')
        })
    })
})