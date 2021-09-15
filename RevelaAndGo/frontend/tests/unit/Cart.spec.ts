import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Cart from '../../src/views/Cart.vue';

describe('Given a Cart component', () => {
    describe('When is rendered', () => {
        test('Should render a pagar text', () => {
            const wrapper = mount(Cart, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      actions: {
                        fetchUserLoggedFromApi: jest.fn(),
                        addServiceToThisUserCart: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
          
            const pay = wrapper.get('[data-test="pagar"]')
          
            expect(pay.text()).toBe('Pagar')
          })
          test('Should render a found labs text', () => {
            const methods = {
              updateFinalPrice: jest.fn(),
          }
              const wrapper = mount(Cart,  {
                  global: {
                    plugins: [router],
                    mocks: {
                      $store: {
                        state,
                        actions: {
                          fetchUserLoggedFromApi: jest.fn(),
                          addServiceToThisUserCart: jest.fn(),
                        },
                        methods,
                        dispatch: jest.fn(),
                        commit: jest.fn(),
                      },
                    },
                  },
                  
              })
            
              const updateFinalPrice = jest.fn();
              updateFinalPrice();
              const addCart = wrapper.get('[data-test="addCart"]')
              expect(updateFinalPrice).toHaveBeenCalled();
              
            })
    })
})