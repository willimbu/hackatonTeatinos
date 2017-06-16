import { DatesFirebaseGeneratorPage } from './app.po';

describe('dates-firebase-generator App', () => {
  let page: DatesFirebaseGeneratorPage;

  beforeEach(() => {
    page = new DatesFirebaseGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
