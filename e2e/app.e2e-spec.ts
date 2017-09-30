import { ShellhacksPage } from './app.po';

describe('shellhacks App', () => {
  let page: ShellhacksPage;

  beforeEach(() => {
    page = new ShellhacksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
