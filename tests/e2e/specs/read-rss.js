const HACKERNEWS_URL = 'https://news.ycombinator.com';
const FEEDBURNER_URL = 'https://www.fayerwayer.com';

describe('RSS Read', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[href="/feeds"]').click();
    cy.contains('h1', 'This is the Feeds page');
  });

  it('Find the RSS feed for HackerNews', () => {
    cy.get('#entry-url').type(HACKERNEWS_URL);
    cy.get('#find-feed').click();
    cy.contains('h2', 'Hacker News');
    cy.contains('h3', 'https://news.ycombinator.com/rss').end();
  });

  it('Get the content of the HackerNews feed', () => {
    cy.get('#entry-url').type(HACKERNEWS_URL);
    cy.get('#find-feed').click();
    cy.contains('h2', 'Hacker News');
    cy.contains('h3', 'https://news.ycombinator.com/rss');
    cy.wait(500);
    cy.get('#get-feed').click();
    cy.contains(
      'h4',
      'Links for the intellectually curious, ranked by readers.'
    );
  });

  it('Find the RSS feed for Fayerwayer', () => {
    cy.get('#entry-url').type(FEEDBURNER_URL);
    cy.get('#find-feed').click();
    cy.contains('h2', 'FayerWayer');
    cy.contains('h3', 'https://feeds.feedburner.com/fayerwayer').end();
  });

  it('Get the content of the HackerNews feed', () => {
    cy.get('#entry-url').type(FEEDBURNER_URL);
    cy.get('#find-feed').click();
    cy.contains('h2', 'FayerWayer');
    cy.contains('h3', 'https://feeds.feedburner.com/fayerwayer');
    cy.wait(500);
    cy.get('#get-feed').click();
    cy.contains('h4', 'Dosis diarias de tecnología en español.™');
  });
});
