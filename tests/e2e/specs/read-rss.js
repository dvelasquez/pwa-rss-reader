describe('RSS Read', () => {
  it('Reads the content of a RSS feed', () => {
    cy.visit('/');
    cy.get('[href="/feeds"]').click();
    cy.contains('h1', 'This is the Feeds page');
    cy.contains('h2', 'Hacker News');
    cy.contains('h3', 'https://news.ycombinator.com//rss').end();
  });
});
