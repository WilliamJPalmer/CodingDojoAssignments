import { RoutingPracticePage } from './app.po';

describe('routing-practice App', () => {
  let page: RoutingPracticePage;

  beforeEach(() => {
    page = new RoutingPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
