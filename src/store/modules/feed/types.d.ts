import { FeedEntity } from '@/domain/entities/FeedEntity';

export interface StoreError {
  state: boolean;
  name?: string;
  message?: string;
  stack?: string;
}

export interface FeedState extends FeedEntity {
  error: StoreError;
}
