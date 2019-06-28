import { RSSDocumentEntity } from '@/domain/entities/RSSDocumentEntity';

export interface FeedEntity {
  title?: string;
  url: string;
  description?: string;
  content?: RSSDocumentEntity;
}
