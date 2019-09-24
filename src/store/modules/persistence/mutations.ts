import { StoreError } from '@/store/modules/feed/types';
import { PersistenceState } from '@/store/modules/persistence/types';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<PersistenceState> = {
  PERSISTENCE_FEED_UPDATED(state, payload) {
    state.feeds = payload.feeds;
  },
  PERSISTENCE_ARTICLES_UPDATED(state, payload) {
    state.articles = payload.articles;
  },
  STORE_ERROR(state, payload: StoreError) {
    state.error = payload;
  }
};
