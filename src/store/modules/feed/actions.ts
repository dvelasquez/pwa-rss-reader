import { FeedResolverInterface } from '@/domain/services/FeedResolverService';
import { ActionTree } from 'vuex';
import { FeedState, StoreError } from '@/store/modules/feed/types';
import { RootState } from '@/store/types';
import { FeedResolverFactory } from '@/domain/factories/FeedResolverFactory';
import { FeedReaderInterface } from '@/domain/services/FeedReaderService';
import { FeedReaderFactory } from '@/domain/factories/FeedReaderFactory';

const FeedResolverSrv: FeedResolverInterface = FeedResolverFactory.createService();
const FeedReaderSrv: FeedReaderInterface = FeedReaderFactory.createService();

export const actions: ActionTree<FeedState, RootState> = {
  async resolveFeedUrl({ commit }, url) {
    try {
      const actionResponse = await FeedResolverSrv.resolveFeedUrl(url || null);
      return commit(actionResponse.type, actionResponse.payload);
    } catch (error) {
      const storeError: StoreError = {
        state: true,
        message: error,
        name: 'STORE_ERROR'
      };
      return commit('STORE_ERROR', storeError);
    }
  },
  async getFeedContent({ commit }, url) {
    try {
      const actionResponse = await FeedReaderSrv.readFeed(url);
      return commit(actionResponse.type, actionResponse.payload);
    } catch (error) {
      const storeError: StoreError = {
        state: true,
        message: error,
        name: 'STORE_ERROR'
      };
      return commit('STORE_ERROR', storeError);
    }
  }
};
