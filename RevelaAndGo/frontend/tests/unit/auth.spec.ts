import axios from 'axios';
import auth from '../../src/auth/auth';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Given a register function', ()=>{
    describe('When is triggered', () => {
        test('Should register a user with a post to axios', async ()=> {
            const email = "email@email.com";
            const password = "1234";
            
            mockedAxios.post.mockResolvedValue({
                data: {},
              });

              await auth.register(email, password)
              expect(axios.post).toHaveBeenCalled();

        })
    })
})

describe('Given a login function', ()=>{
    describe('When is triggered', () => {
        test('Should login a user with a post to axios', async ()=> {
            const email = "email@email.com";
            const password = "1234";
            
            mockedAxios.post.mockResolvedValue({
                data: {},
              });

              await auth.login(email, password)
              expect(axios.post).toHaveBeenCalled();

        })
    })
})