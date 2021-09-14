import axios from 'axios';
import actions from '../../src/store/actions';
import {Commit} from 'vuex';
import {UserFromApi, Service, Cart} from '../../src/types/interfaces';
import {configActionContext} from '../test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest.MockedFunction<Commit>;

describe('Given an action', ()=> {
    test('Should fetch labs from api', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });
  
      await actions.fetchLabsFromApi(configActionContext(commit));

      expect(axios.get).toHaveBeenCalled();
    })
    test('Should fetch a lab from api', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });
  
      await actions.fetchLabFromApi(configActionContext(commit), "1234");

      expect(axios.get).toHaveBeenCalled();
    })
    test('Should fetch a logged user from api', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });

      const user = {} as UserFromApi;
  
      await actions.fetchUserLoggedFromApi(configActionContext(commit), user);

      expect(axios.get).toHaveBeenCalled();
    })
    test('Should fetch a logged user from api', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });

      const user = {} as UserFromApi;
  
      await actions.fetchUserLoggedFromApi(configActionContext(commit), user);

      expect(commit).toHaveBeenCalled();
    })
    test('Should add a service to api', async () => {
      mockedAxios.post.mockResolvedValue({
        data: [],
      });

      const service = {} as Service;
  
      await actions.addServiceToDB(configActionContext(commit), service);

      expect(axios.post).toHaveBeenCalled();
    })
    
    test('Should update a user cart in api', async () => {
      mockedAxios.put.mockResolvedValue({
        data: [],
      });
  
      await actions.addServiceToThisUserCart(configActionContext(commit), {services: [], cartId:'',serviceId:''});

      expect(axios.put).toHaveBeenCalled();
    })
    test('Should delete a user service in a cart in api', async () => {
      mockedAxios.put.mockResolvedValue({
        data: [],
      });

      const cart = {} as Cart;
  
      await actions.deleteService(configActionContext(commit), {serviceId:'', cart});

      expect(axios.put).toHaveBeenCalled();
    })
    test('Should get specific labs from api', async () => {
      mockedAxios.get.mockResolvedValue({
        data: [],
      });

      await actions.searchingLab(configActionContext(commit), '');

      expect(axios.get).toHaveBeenCalled();
    })
})

