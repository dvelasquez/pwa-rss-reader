import { ArticleState } from '@/store/modules/articles/types';
import { FeedSourceState } from '@/store/modules/feed/types';
import { PersistenceState } from '@/store/modules/persistence/types';

export interface Commit<T> {
  type: string;
  payload?: T;
}

export interface RootState {
  version: string;
  feed?: FeedSourceState;
  articles?: ArticleState;
  persistence?: PersistenceState;
}
