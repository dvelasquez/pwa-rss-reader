import { FeedResolverService } from '@/domain/services/FeedResolverService';

export class FeedResolverFactory {
  static createService(): FeedResolverService {
    return new FeedResolverService(fetch);
  }
}
