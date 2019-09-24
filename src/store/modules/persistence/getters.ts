import { GetterTree } from 'vuex';
import { PersistenceState } from '@/store/modules/persistence/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<PersistenceState, RootState> = {
  getFeeds(state: PersistenceState) {
    return state;
  },
  getArticles(state: PersistenceState) {
    return state;
  }
};
