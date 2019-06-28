import { FeedState } from '@/store/modules/feed/types';

export interface Commit<T> {
  type: string;
  payload?: T;
}

export interface RootState {
  version: string;
  feed?: FeedState;
}
