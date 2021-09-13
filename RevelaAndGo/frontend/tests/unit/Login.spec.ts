import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Login from '../../src/views/Login.vue';

describe('Given a Login component', () => {
    describe('When is rendered', () => {
        test('Should render a Login text', () => {
            const wrapper = mount(Login,  {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      mutations: {
                        loginUser: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
              
            expect(wrapper.html()).toContain('<div class="login__email">')
          })
    })
})