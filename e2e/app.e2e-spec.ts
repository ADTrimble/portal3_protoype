import { Portal3ProtoypePage } from './app.po';

describe('portal3-protoype App', function() {
  let page: Portal3ProtoypePage;

  beforeEach(() => {
    page = new Portal3ProtoypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
