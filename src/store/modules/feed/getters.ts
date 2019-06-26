import { GetterTree } from 'vuex';
import { FeedState } from '@/store/modules/feed/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<FeedState, RootState> = {
  resolveFeedUrl(state: FeedState) {
    return state;
  },
  getFeedContent(state: FeedState) {
    return state;
  }
};
