import { ClankWebPage } from './app.po';

describe('clank-web App', function() {
  let page: ClankWebPage;

  beforeEach(() => {
    page = new ClankWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
