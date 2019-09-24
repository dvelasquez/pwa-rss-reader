import { PersistenceService } from '@/domain/services/PersistenceService';

export class PersistenceFactory {
  static createService(): PersistenceService {
    return new PersistenceService();
  }
}
