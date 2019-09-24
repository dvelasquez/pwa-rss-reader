import { PersistenceEntity } from '@/domain/entities/PersistenceEntity';

export interface StoreError {
  state: boolean;
  name?: string;
  message?: string;
  stack?: string;
}

export interface PersistenceState extends PersistenceEntity {
  error: StoreError;
}
