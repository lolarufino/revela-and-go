import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Profile from '../../src/views/Profile.vue';

describe('Given a Profile component', () => {
    describe('When is rendered', () => {
        test('Should render a nombre text', () => {
            const wrapper = mount(Profile, {
              data (){
                return{
                  showModal: true,
                  imageFile: "https://i.ibb.co/3pN6HCG/pexels-cottonbro-3585011.jpg",
                  uploadFieldName: "file",
                }
            },
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      actions: {
                        fetchUserLoggedFromApi: jest.fn(),
                      },
                      methods: {
                        onFileChange: jest.fn(),
                      },
                      dispatch: jest.fn(),
                      commit: jest.fn(),
                    },
                  },
                },
            })
            console.log(wrapper.html());
            const name = wrapper.get('[data-test="email"]');
            expect(name.text()).toBe('E-mail:');
            const onFileChange = jest.fn();
            const file = wrapper.find('[data-test="fileUpload"]');
            file.trigger('change');
            expect(onFileChange).toHaveBeenCalled();
          })
    })
})