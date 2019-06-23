import {
  FeedResolverInterface,
  FeedResolverService
} from '@/domain/services/FeedResolverService';

describe('@/domain/services/FeedResolverService', () => {
  let dummyDOM = '';
  const fetch: GlobalFetch['fetch'] = (
    url: string,
    object: any
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      resolve({ text: async () => dummyDOM });
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
    feedResolver = new FeedResolverService(fetch);
  });

  it('should return the Title of a HTML Document String', async () => {
    const document = await feedResolver.getDOMWithProxyCORS('1');
    const name = feedResolver.getFeedName(document);
    expect(name).toEqual('Dummy HTML');
  });

  it('should return the RSS Feed URL of a HTML Document String', async () => {
    const document = await feedResolver.getDOMWithProxyCORS('1');
    const name = feedResolver.getFeedUrl(document);
    expect(name).toEqual('rss-feed');
  });

  it('should return the complete resolved Feed Object', async () => {
    const resolvedFeedEntityCommit = await feedResolver.resolveFeedUrl('1');
    const feedEntityCommit = {
      type: 'FEED_RESOLVED',
      payload: {
        name: 'Dummy HTML',
        url: '1/rss-feed'
      }
    };
    expect(resolvedFeedEntityCommit).toEqual(feedEntityCommit);
  });
});
