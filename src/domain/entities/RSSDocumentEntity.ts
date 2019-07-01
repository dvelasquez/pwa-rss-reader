import { RSSItemEntity } from '@/domain/entities/RSSItemEntity';

export interface RSSDocumentEntity {
  title?: string;
  link?: string;
  description?: string | any;
  item?: RSSItemEntity[];
  comments?: string;
}
