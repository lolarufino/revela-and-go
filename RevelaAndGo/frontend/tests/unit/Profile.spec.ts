import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Profile from '../../src/views/Profile.vue';

describe('Given a Profile component', () => {
    describe('When is rendered', () => {
        test('Should render a nombre text', () => {
            const wrapper = mount(Profile, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      actions: {
                        fetchUserLoggedFromApi: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
          
            const name = wrapper.get('[data-test="email"]')
          
            expect(name.text()).toBe('E-mail:')
          })
    })
})