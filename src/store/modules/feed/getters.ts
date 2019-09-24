import { GetterTree } from 'vuex';
import { FeedSourceState } from '@/store/modules/feed/types';
import { RootState } from '@/store/types';

export const getters: GetterTree<FeedSourceState, RootState> = {
  resolveFeedUrl(state: FeedSourceState) {
    return state;
  }
};
