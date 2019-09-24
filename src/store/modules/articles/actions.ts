import { ArticleReaderFactory } from '@/domain/factories/ArticleReaderFactory';
import { ArticleReaderInterface } from '@/domain/services/ArticleReaderService';
import { ArticleState } from '@/store/modules/articles/types';
import { StoreError } from '@/store/modules/feed/types';
import { RootState } from '@/store/types';
import { ActionTree } from 'vuex';

const ArticleReaderSrv: ArticleReaderInterface = ArticleReaderFactory.createService();

export const actions: ActionTree<ArticleState, RootState> = {
  async getFeedContent({ commit }, url) {
    try {
      const actionResponse = await ArticleReaderSrv.readArticlesFromFeed(url);
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
