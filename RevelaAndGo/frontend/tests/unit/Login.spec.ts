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
          test('Should render a Login form', () => {
            const loginUser = jest.fn()
          
            const wrapper = mount(Login,  {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      mutations: {
                        loginUser: jest.fn(),
                      },
                      methods: {
                        login: jest.fn().mockResolvedValue({
                          email: "@",
                          password: "1234"
                        })
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                    data() {
                      return{
                        email: "",
                        password: "",
                        error: false
                      }
                    }
                  },
                },
            })
          
            const loginForm = wrapper.get('[data-test="loginForm"]');
            loginForm.trigger('submit')
            expect(loginUser).toHaveBeenCalled();
          })
    })
})

