import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import LabsList from '../../src/views/LabsList.vue';

describe('Given a LabsList component', () => {
    describe('When is rendered', () => {
        test('Should render a found labs text', () => {
            const wrapper = mount(LabsList,  {
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
          
            const foundlabs = wrapper.get('[data-test="foundlabs"]')
          
            expect(foundlabs.text()).toBe('Estos son los laboratorios que corresponden a tu búsqueda:')
          })
    })
})