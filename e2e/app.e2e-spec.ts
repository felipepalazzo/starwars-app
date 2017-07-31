import { StarwarsAppPage } from './app.po';

describe('starwars-app App', () => {
  let page: StarwarsAppPage;

  beforeEach(() => {
    page = new StarwarsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
