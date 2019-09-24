import { ArticleEntity } from '@/domain/entities/ArticleEntity';
import { FeedSourceEntity } from '@/domain/entities/FeedSourceEntity';
import { PersistenceEntity } from '@/domain/entities/PersistenceEntity';
import { Commit } from '@/store/types';
import localforage from 'localforage';
import { CommitOptions } from 'vuex';

export interface PersistenceInterface {
  getFeeds(): Promise<Commit<PersistenceEntity>>;
  getArticles(): Promise<Commit<PersistenceEntity>>;
  saveFeeds(feeds: FeedSourceEntity[]): Promise<Commit<PersistenceEntity>>;
  saveArticles(articles: ArticleEntity[]): Promise<Commit<PersistenceEntity>>;
}

export class PersistenceService implements PersistenceInterface {
  private $localforage = localforage;

  constructor() {
    this.$localforage.config({
      name: 'RSS_DB',
      version: 1.0
    });
  }
  async getFeeds(): Promise<Commit<PersistenceEntity>> {
    try {
      const feeds = (await this.$localforage.getItem(
        'feeds'
      )) as FeedSourceEntity[];
      return {
        type: 'PERSISTENCE_FEED_UPDATED',
        payload: {
          feeds: feeds
        }
      };
    } catch (error) {
      throw error;
    }
  }

  async getArticles(): Promise<Commit<PersistenceEntity>> {
    try {
      const articles = (await this.$localforage.getItem(
        'articles'
      )) as ArticleEntity[];
      return {
        type: 'PERSISTENCE_ARTICLES_UPDATED',
        payload: {
          articles: articles
        }
      };
    } catch (error) {
      throw error;
    }
  }

  async saveFeeds(
    feeds: FeedSourceEntity[]
  ): Promise<Commit<PersistenceEntity>> {
    try {
      await this.$localforage.setItem('feeds', feeds);
      return this.getFeeds();
    } catch (error) {
      throw error;
    }
  }

  async saveArticles(
    articles: ArticleEntity[]
  ): Promise<Commit<PersistenceEntity>> {
    try {
      await this.$localforage.setItem('articles', articles);
      return this.getArticles();
    } catch (error) {
      throw error;
    }
  }
}
