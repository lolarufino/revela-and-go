import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Register from '../../src/views/Register.vue';

describe('Given a Register component', () => {
    describe('When is rendered', () => {
        test('Should render a registrarse text', () => {
            const wrapper = mount(Register)
          
            expect(wrapper.html()).toContain('<div class="register__email">')
        })
        test('Should render a registrarse form', () => {
            const wrapper = mount(Register, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      mutations: {
                        loginUser: jest.fn(),
                      },
                      methods: {
                          register: jest.fn()
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
                data() {
                    return{email: "",
                    password: "",
                }},
            })
          
            const register= jest.fn()
            register();
            const registerForm = wrapper.get('[data-test="registerForm"]');
            registerForm.trigger('submit');
            expect(register).toHaveBeenCalled();
        })
    })
})