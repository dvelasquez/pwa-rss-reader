import { Commit } from '@/store/types';
import { FeedEntity } from '@/domain/entities/FeedEntity';
import { feed } from '@/store/modules/feed';

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
          title: this.getFeedName(document),
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
        const error = 'RSSError: href element is null';
        console.warn(error);
        throw Error(error);
      }
      return href;
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
      return links[0].href;
    } else {
      throw Error('RSSError: Unable to find Feedburner rss link');
    }
  }

  getFeedName(document: HTMLDocument): string {
    const title = document.querySelector('title');
    return title ? title.text : '';
  }
}
