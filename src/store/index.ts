import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { feed } from '@/store/modules/feed';
import { articles } from '@/store/modules/articles';
import { persistence } from '@/store/modules/persistence';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
    feed: undefined,
    articles: undefined,
    persistence: undefined
  },
  modules: {
    feed,
    articles,
    persistence
  }
};

const storeInstance = new Vuex.Store<RootState>(store);

export default storeInstance;
