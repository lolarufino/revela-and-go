import { mount } from '@vue/test-utils';
import router from '../../src/router';
import toast from 'vue-dk-toast';
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
          
            const foundlabs = wrapper.get('[data-test="foundlabs"]');

          
            expect(foundlabs.text()).toBe('Estos son los laboratorios que corresponden a tu búsqueda:')
          })
          test('Should render a found labs text', () => {
              const wrapper = mount(LabsList,  {
                  global: {
                    plugins: [router, toast],
                    mocks: {
                      $store: {
                        state,
                        actions: {
                          fetchLabsFromApi: jest.fn(),
                        },
                        methods: {
                          updateServicePrice: jest.fn(),
                          toast: jest.fn()
                        },
                        dispatch: jest.fn(),
                        commit: jest.fn(),
                      },
                    },
                  },
                  
              })
            
              const updateServicePrice = jest.fn();
              updateServicePrice();
              const addCart = wrapper.get('[data-test="addCart"]')
              addCart.trigger('click')
            
              expect(updateServicePrice).toHaveBeenCalled();
            })
    })
})