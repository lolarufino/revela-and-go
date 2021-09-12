import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import LabDetail from '../../src/views/LabDetail.vue';

describe('Given a LabDetail component', () => {
    describe('When is rendered', () => {
        test('Should render an address text', () => {
            const wrapper = mount(LabDetail, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      actions: {
                        fetchLabFromApi: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
          
            const address = wrapper.get('[data-test="address"]')
          
            expect(address.text()).toBe('Dirección:')
          })
    })
})