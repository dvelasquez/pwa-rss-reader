import {FeedSourceEntity} from '@/domain/entities/FeedSourceEntity'

export interface StoreError {
  state: boolean;
  name?: string;
  message?: string;
  stack?: string;
}

export interface FeedSourceState extends FeedSourceEntity {
  error: StoreError;
}
