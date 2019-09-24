import { ArticleState } from '@/store/modules/articles/types';
import { RootState } from '@/store/types';
import { GetterTree } from 'vuex';

export const getters: GetterTree<ArticleState, RootState> = {
  getFeedContent(state: ArticleState) {
    return state;
  }
};
