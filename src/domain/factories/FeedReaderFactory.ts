import { FeedReaderService } from '@/domain/services/FeedReaderService';

export class FeedReaderFactory {
  static createService(): FeedReaderService {
    return new FeedReaderService(fetch);
  }
}
