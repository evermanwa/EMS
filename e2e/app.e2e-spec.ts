import { EMSPage } from './app.po';

describe('ems App', () => {
  let page: EMSPage;

  beforeEach(() => {
    page = new EMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
