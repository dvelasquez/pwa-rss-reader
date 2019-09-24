import { ArticleEntity } from '@/domain/entities/ArticleEntity';

export interface StoreError {
  state: boolean;
  name?: string;
  message?: string;
  stack?: string;
}

export interface ArticleState {
  list: ArticleEntity[];
  error: StoreError;
}
