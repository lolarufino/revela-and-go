import { State } from '@/types/interfaces';
import { Commit, Dispatch } from 'vuex';

const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

export {
  configActionContext,
};