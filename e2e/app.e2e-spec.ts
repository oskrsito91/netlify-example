import { NetlifyExamplePage } from './app.po';

describe('netlify-example App', () => {
  let page: NetlifyExamplePage;

  beforeEach(() => {
    page = new NetlifyExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
