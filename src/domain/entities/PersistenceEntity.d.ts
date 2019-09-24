import { ArticleEntity } from '@/domain/entities/ArticleEntity';
import { FeedSourceEntity } from '@/domain/entities/FeedSourceEntity';

export interface PersistenceEntity {
  articles?: ArticleEntity[];
  feeds?: FeedSourceEntity[];
}
