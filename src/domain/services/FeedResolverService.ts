import { Commit } from '@/store/types';
import { FeedEntity } from '@/domain/entities/FeedEntity';

export interface FeedResolverInterface {
  resolveFeedUrl(url: string): Promise<Commit<FeedEntity>>;
  getDOMWithProxyCORS(url: string): Promise<HTMLDocument>;
  getFeedUrl(document: HTMLDocument): string;
  getFeedName(document: HTMLDocument): string;
}

export class FeedResolverService implements FeedResolverInterface {
  $fetch: GlobalFetch['fetch'];
  constructor(globalFetch: any) {
    this.$fetch = globalFetch.bind();
  }

  public async resolveFeedUrl(url: string): Promise<Commit<FeedEntity>> {
    try {
      const document = await this.getDOMWithProxyCORS(url);
      return {
        type: 'FEED_RESOLVED',
        payload: {
          name: this.getFeedName(document),
          url: `${url}/${this.getFeedUrl(document)}`
        }
      };
    } catch (e) {
      return { type: 'STORE_ERROR', payload: e };
    }
  }

  public async getDOMWithProxyCORS(url: string): Promise<HTMLDocument> {
    try {
      const result = await this.$fetch(
        `https://cors-anywhere.herokuapp.com/${url}`,
        {
          method: 'GET',
          cache: 'default'
        }
      );
      const htmlString = await result.text();
      return new DOMParser().parseFromString(htmlString, 'text/html');
    } catch (e) {
      throw e;
    }
  }

  public getFeedUrl(document: HTMLDocument): string {
    const linkElement = document.querySelector(
      'link[type="application/rss+xml"]'
    );
    if (linkElement) {
      const href = linkElement.getAttribute('href');
      if (!href) {
        throw new Error('RSSError: href element is null');
      }
      return href;
    } else {
      throw new Error('RSSError: Document without feed RSS');
    }
  }

  getFeedName(document: HTMLDocument): string {
    const title = document.querySelector('title');
    return title ? title.text : '';
  }
}
