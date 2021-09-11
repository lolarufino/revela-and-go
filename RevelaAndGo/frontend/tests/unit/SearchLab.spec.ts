import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import SearchLab from '../../src/views/SearchLab.vue';

describe('Given a SearchLab component', () => {
    describe('When is rendered', () => {
        test('Should render a found labs text', () => {
            const wrapper = mount(SearchLab, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      actions: {
                        fetchLabsFromApi: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
              })
          
            expect(wrapper.html()).toContain('<p class="labslist__header" data-test="foundlabs"> Estos son los laboratorios que corresponden a tu búsqueda:</p>')
          })
    })
})