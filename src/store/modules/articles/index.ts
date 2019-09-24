import { Module } from 'vuex';
import { actions } from '@/store/modules/articles/actions';
import { getters } from '@/store/modules/articles/getters';
import { mutations } from '@/store/modules/articles/mutations';
import { ArticleState } from '@/store/modules/articles/types';
import { RootState } from '@/store/types';

export const state: ArticleState = {
  list: [],
  error: { state: false }
};

const namespaced: boolean = true;

export const articles: Module<ArticleState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
