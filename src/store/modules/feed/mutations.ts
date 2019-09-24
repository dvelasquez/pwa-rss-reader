import { MutationTree } from 'vuex';
import { FeedSourceState, StoreError } from '@/store/modules/feed/types';

export const mutations: MutationTree<FeedSourceState> = {
  FEED_SOURCE_RESOLVED(state, payload: FeedSourceState) {
    state.error = { state: false };
    state.title = payload.title;
    state.url = payload.url;
  },
  STORE_ERROR(state, payload: StoreError) {
    state.error = payload;
  }
};
