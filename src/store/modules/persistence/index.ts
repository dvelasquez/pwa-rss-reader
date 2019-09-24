import { Module } from 'vuex';
import { actions } from '@/store/modules/persistence/actions';
import { getters } from '@/store/modules/persistence/getters';
import { mutations } from '@/store/modules/persistence/mutations';
import { PersistenceState } from '@/store/modules/persistence/types';
import { RootState } from '@/store/types';

export const state: PersistenceState = {
  feeds: [],
  articles: [],
  error: { state: false }
};

const namespaced: boolean = true;

export const persistence: Module<PersistenceState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
