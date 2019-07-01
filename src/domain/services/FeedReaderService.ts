import {Commit} from '@/store/types';
import {RSSDocumentEntity} from '@/domain/entities/RSSDocumentEntity';
import {FeedEntity} from '@/domain/entities/FeedEntity';
import {RSSItemEntity} from '@/domain/entities/RSSItemEntity';

export interface FeedReaderInterface {
  readFeed(url: string): Promise<Commit<FeedEntity>>;
}

export class FeedReaderService implements FeedReaderInterface {
  private $fetch: GlobalFetch['fetch'];

  constructor(globalFetch: any) {
    this.$fetch = globalFetch.bind();
  }

  public async readFeed(url: string): Promise<Commit<FeedEntity>> {
    try {
      const xmlDocument = await this.fetchRSSFeed(url);
      const rss = await this.parseFeedDocument(xmlDocument);
      return {
        type: 'RSS_CONTENT_UPDATED',
        payload: {
          title: rss.title,
          description: rss.description,
          url: url,
          content: rss
        }
      };
    } catch (e) {
      throw e;
    }
  }

  async fetchRSSFeed(url: string): Promise<XMLDocument> {
    try {
      const fetchedXML = await this.$fetch(
        `https://cors-anywhere.herokuapp.com/${url}`
      );
      const xmlRSS = await fetchedXML.text();
      return new DOMParser().parseFromString(xmlRSS, 'text/xml');
    } catch (e) {
      throw e;
    }
  }

  parseFeedDocument(document: XMLDocument): RSSDocumentEntity {
    const channel = this.xmlToJson(document).rss.channel;
    const rssDocumentEntity = channel.item.map((item: RSSItemEntity) => {
      if (item.pubDate && this.isValidDate(item.pubDate)) {
        return item;
      } else {
        return { ...item, pubDate: Date.parse(item.pubDate) };
      }
    });
    return rssDocumentEntity;
  }

  isValidDate(date: any): boolean {
    return (
      date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !isNaN(date)
    );
  }

  xmlToJson(xml: Element | Document | XMLDocument | any): any {
    // Create the return object
    let obj: any = {};

    if (xml.nodeType == 1) {
      if (xml.attributes.length > 0) {
        obj['$attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          let attribute = xml.attributes.item(j);
          if (attribute && attribute.value) {
            obj['$attributes'][attribute.nodeName] = attribute.nodeValue;
          }
        }
      }
    } else if (xml.nodeType == 3) {
      obj = xml.nodeValue;
    }

    const textNodes = [].slice
      .call(xml.childNodes)
      .filter(function(node: Element) {
        return node.nodeType === 3;
      });
    if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
      obj = [].slice.call(xml.childNodes).reduce((text, node: Element) => {
        return text + node.nodeValue;
      }, '');
    } else if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        let item = xml.childNodes.item(i);
        let nodeName = item.nodeName;
        if (typeof obj[nodeName] == 'undefined') {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == 'undefined') {
            let old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
}
