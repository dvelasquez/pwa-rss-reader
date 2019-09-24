import { FeedResolverFactory } from '@/domain/factories/FeedResolverFactory';
import { FeedResolverInterface } from '@/domain/services/FeedResolverService';
import { FeedSourceState, StoreError } from '@/store/modules/feed/types';
import { RootState } from '@/store/types';
import { ActionTree } from 'vuex';

const FeedResolverSrv: FeedResolverInterface = FeedResolverFactory.createService();

export const actions: ActionTree<FeedSourceState, RootState> = {
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
  }
};
