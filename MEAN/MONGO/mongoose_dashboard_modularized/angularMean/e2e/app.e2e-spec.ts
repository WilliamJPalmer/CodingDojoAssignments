import { AngularMeanPage } from './app.po';

describe('angular-mean App', () => {
  let page: AngularMeanPage;

  beforeEach(() => {
    page = new AngularMeanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
