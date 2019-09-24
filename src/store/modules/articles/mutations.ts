import { ArticleEntity } from '@/domain/entities/ArticleEntity';
import { ArticleState } from '@/store/modules/articles/types';
import { StoreError } from '@/store/modules/feed/types';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<ArticleState> = {
  RSS_CONTENT_UPDATED(state, payload: ArticleEntity[]) {
    state.error = { state: false };
    state.list = payload;
  },
  STORE_ERROR(state, payload: StoreError) {
    state.error = payload;
  }
};
