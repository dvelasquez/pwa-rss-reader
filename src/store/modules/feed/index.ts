import { Module } from 'vuex';
import { actions } from '@/store/modules/feed/actions';
import { getters } from '@/store/modules/feed/getters';
import { mutations } from '@/store/modules/feed/mutations';
import { FeedState } from '@/store/modules/feed/types';
import { RootState } from '@/store/types';

export const state: FeedState = {
  name: 'PWA RSS READER',
  url: '',
  error: { state: false }
};

const namespaced: boolean = true;

export const feed: Module<FeedState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
