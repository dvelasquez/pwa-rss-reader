import { Commit } from '@/store/types';
import { ArticleEntity } from '@/domain/entities/ArticleEntity';

export interface ArticleReaderInterface {
  readArticlesFromFeed(url: string): Promise<Commit<ArticleEntity[]>>;
}

export class ArticleReaderService implements ArticleReaderInterface {
  private $fetch: GlobalFetch['fetch'];

  constructor(globalFetch: any) {
    this.$fetch = globalFetch.bind();
  }

  public async readArticlesFromFeed(
    url: string
  ): Promise<Commit<ArticleEntity[]>> {
    try {
      const xmlDocument = await this.fetchRSSFeed(url);
      const rss = await this.parseFeedDocument(xmlDocument);
      return {
        type: 'RSS_CONTENT_UPDATED',
        payload: rss
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

  parseFeedDocument(document: XMLDocument): ArticleEntity[] {
    const channel = this.xmlToJson(document).rss.channel;
    const rssDocumentEntity = channel.item.map((item: ArticleEntity) => {
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
