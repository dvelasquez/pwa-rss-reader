import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { feed } from '@/store/modules/feed';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
    feed: undefined
  },
  modules: {
    feed
  }
};

const storeInstance = new Vuex.Store<RootState>(store);

export default storeInstance;
