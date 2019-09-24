import { ArticleEntity } from '@/domain/entities/ArticleEntity';

export interface FeedSourceEntity {
  title: string;
  url: string;
  articles?: ArticleEntity[];
}
