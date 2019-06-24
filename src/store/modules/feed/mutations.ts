import { MutationTree } from 'vuex';
import { FeedState, StoreError } from '@/store/modules/feed/types';
import { FeedEntity } from '@/domain/entities/FeedEntity';

export const mutations: MutationTree<FeedState> = {
  FEED_RESOLVED(state, payload: FeedEntity) {
    state.error = { state: false };
    state.name = payload.name;
    state.url = payload.url;
  },
  FEED_CONTENT_RESOLVED(state, payload: FeedEntity) {
    state.error = { state: false };
    state.name = payload.name;
    state.url = payload.url;
  },
  STORE_ERROR(state, payload: StoreError) {
    state.error = payload;
  }
};
