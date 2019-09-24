import { PersistenceFactory } from '@/domain/factories/PersistenceFactory';
import { PersistenceInterface } from '@/domain/services/PersistenceService';
import { StoreError } from '@/store/modules/persistence/types';
import { PersistenceState } from '@/store/modules/persistence/types';
import { RootState } from '@/store/types';
import { ActionTree } from 'vuex';

const PersistenceSrv: PersistenceInterface = PersistenceFactory.createService();

export const actions: ActionTree<PersistenceState, RootState> = {
  async getFeeds({ commit }) {
    try {
      const actionResponse = await PersistenceSrv.getFeeds();
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
  async getArticles({ commit }) {
    try {
      const actionResponse = await PersistenceSrv.getArticles();
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
  async saveFeeds({ commit }, feeds) {
    try {
      const actionResponse = await PersistenceSrv.saveFeeds(feeds);
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
  async saveArticles({ commit }, articles) {
    try {
      const actionResponse = await PersistenceSrv.saveArticles(articles);
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
