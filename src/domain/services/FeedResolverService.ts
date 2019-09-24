import { ArticleEntity } from '@/domain/entities/ArticleEntity';
import { FeedSourceEntity } from '@/domain/entities/FeedSourceEntity';
import { Commit } from '@/store/types';

export interface FeedResolverInterface {
  resolveFeedUrl(url: string): Promise<Commit<FeedSourceEntity>>;

  getDOMWithProxyCORS(url: string): Promise<HTMLDocument>;

  getFeedUrl(document: HTMLDocument, url: string): string;

  getFeedName(document: HTMLDocument): string;
}

export class FeedResolverService implements FeedResolverInterface {
  $fetch: GlobalFetch['fetch'];

  constructor(globalFetch: any) {
    this.$fetch = globalFetch.bind();
  }

  public async resolveFeedUrl(url: string): Promise<Commit<FeedSourceEntity>> {
    try {
      const document = await this.getDOMWithProxyCORS(url);
      return {
        type: 'FEED_SOURCE_RESOLVED',
        payload: {
          title: this.getFeedName(document),
          url: `${this.getFeedUrl(document, url)}`,
          articles: []
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

  public getFeedUrl(document: HTMLDocument, url: string): string {
    const linkElement = document.querySelector(
      'link[type="application/rss+xml"]'
    );
    if (linkElement) {
      const href = linkElement.getAttribute('href');
      if (!href) {
        const error = 'RSSError: href element is null';
        console.warn(error);
        throw Error(error);
      }
      return `${url}/${href}`;
    } else {
      const feedBurnerUrl = this.findFeedburnerLink(document);
      if (feedBurnerUrl) {
        return feedBurnerUrl;
      }
      const error = 'RSSError: Document without feed RSS';
      console.warn(error);
      throw Error(error);
    }
  }

  public findFeedburnerLink(document: HTMLDocument): string {
    const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll(
      "[href*='feedburner.com']"
    );
    const link = links[0];
    if (links.length > 0 && link.tagName === 'A') {
      return `${links[0].href}?format=xml`;
    } else {
      throw Error('RSSError: Unable to find Feedburner rss link');
    }
  }

  getFeedName(document: HTMLDocument): string {
    const title = document.querySelector('title');
    return title ? title.text : '';
  }
}
