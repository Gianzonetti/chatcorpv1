import { Chatcorpv1Page } from './app.po';

describe('chatcorpv1 App', () => {
  let page: Chatcorpv1Page;

  beforeEach(() => {
    page = new Chatcorpv1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
