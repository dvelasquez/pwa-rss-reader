import {
  FeedResolverInterface,
  FeedResolverService
} from '@/domain/services/FeedResolverService';

describe('@/domain/services/FeedResolverService', () => {
  let dummyDOM = '';
  let dummyFeedburnerDOM = '';
  const fetch: GlobalFetch['fetch'] = (
    url: string,
    object: any
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      resolve({
        text: async () => {
          if (url === 'https://cors-anywhere.herokuapp.com/https://vanilla') {
            return dummyDOM;
          }
          return dummyFeedburnerDOM;
        }
      });
    });
  };
  let feedResolver: FeedResolverInterface;

  beforeEach(() => {
    dummyDOM = `<html>
<head>
    <title>Dummy HTML</title>
    <link rel="stylesheet" type="application/rss+xml" href="rss-feed">
</head>
</html>    
    `;

    dummyFeedburnerDOM = `<html>
<head>
    <title>Dummy Feedburner HTML</title>
    <body><div><span><a href="https://feeds.feedburner.com/dummy">RSS</a></span></div></body>
</head>
</html>    
    `;
    feedResolver = new FeedResolverService(fetch);
  });

  it('should return the Title of a HTML Document String', async () => {
    const document = await feedResolver.getDOMWithProxyCORS('https://vanilla');
    const name = feedResolver.getFeedName(document);
    expect(name).toEqual('Dummy HTML');
  });

  it('should return the RSS Feed URL of a HTML Document String', async () => {
    const document = await feedResolver.getDOMWithProxyCORS('https://vanilla');
    const name = feedResolver.getFeedUrl(document, 'https://vanilla');
    expect(name).toEqual('https://vanilla/rss-feed');
  });

  it('should return the complete resolved Feed Object', async () => {
    const resolvedFeedEntityCommitVanilla = await feedResolver.resolveFeedUrl(
      'https://vanilla'
    );
    const feedEntityCommitVanilla = {
      type: 'FEED_RESOLVED',
      payload: {
        title: 'Dummy HTML',
        url: 'https://vanilla/rss-feed'
      }
    };
    expect(resolvedFeedEntityCommitVanilla).toEqual(feedEntityCommitVanilla);

    const resolvedFeedEntityCommitFeedburner = await feedResolver.resolveFeedUrl(
      'https://feedburner'
    );
    const feedEntityCommitFeedburner = {
      type: 'FEED_RESOLVED',
      payload: {
        title: 'Dummy Feedburner HTML',
        url: 'https://feeds.feedburner.com/dummy?format=xml'
      }
    };
    expect(resolvedFeedEntityCommitFeedburner).toEqual(
      feedEntityCommitFeedburner
    );
  });
});
