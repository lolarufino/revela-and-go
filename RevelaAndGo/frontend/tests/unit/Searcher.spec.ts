import { mount } from '@vue/test-utils';
import router from '../../src/router';
import state from '../mockedState';
import Searcher from '../../src/components/Searcher.vue';

describe('Given a Searcher component', ()=> {
    describe('When is rendered', ()=> {
        test('Should render the searcher html tag', () => {
            const wrapper = mount(Searcher, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                    },
                  },
                },
              })
          
            expect(wrapper.html()).toContain('<div class="searcher">')
        })

      test('Should call searchingLab function', () => {
        const wrapper = mount(Searcher, {
            global: {
              plugins: [router],
              mocks: {
                $store: {
                  state,
                  methods: {
                    searchLab: jest.fn()
                  },
                  actions: {
                    searchingLab: jest.fn()
                  },
                },
                data() {
                  return{
                    inputValue: ""
                  }
                }
              },
            },
          })
          const searchingLab = jest.fn();
          const searcher = wrapper.get('[data-test="searcher"]')
          searcher.trigger('click')
        expect(searchingLab).toHaveBeenCalled();
    })
    })
})