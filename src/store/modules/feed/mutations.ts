import { MutationTree } from 'vuex';
import { FeedState, StoreError } from '@/store/modules/feed/types';
import { FeedEntity } from '@/domain/entities/FeedEntity';

export const mutations: MutationTree<FeedState> = {
  FEED_RESOLVED(state, payload: FeedEntity) {
    state.error = { state: false };
    state.title = payload.title;
    state.url = payload.url;
  },
  RSS_CONTENT_UPDATED(state, payload: FeedEntity) {
    state.error = { state: false };
    state.title = payload.title;
    state.url = payload.url;
    state.content = payload.content;
  },
  STORE_ERROR(state, payload: StoreError) {
    state.error = payload;
  }
};
