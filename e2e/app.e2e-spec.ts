import { TravisTestPage } from './app.po';

describe('travis-test App', () => {
  let page: TravisTestPage;

  beforeEach(() => {
    page = new TravisTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
