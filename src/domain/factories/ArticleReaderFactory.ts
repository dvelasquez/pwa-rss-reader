import { ArticleReaderService } from '@/domain/services/ArticleReaderService';

export class ArticleReaderFactory {
  static createService(): ArticleReaderService {
    return new ArticleReaderService(fetch);
  }
}
