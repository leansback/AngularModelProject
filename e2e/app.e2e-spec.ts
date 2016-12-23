import { ModeloPage } from './app.po';

describe('modelo App', function() {
  let page: ModeloPage;

  beforeEach(() => {
    page = new ModeloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
