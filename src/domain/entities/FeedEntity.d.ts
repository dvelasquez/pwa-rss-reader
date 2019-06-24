import { RSSDocumentEntity } from '@/domain/entities/RSSDocumentEntity';

export interface FeedEntity {
  name?: string;
  url: string;
  description?: string;
  content?: RSSDocumentEntity;
}
