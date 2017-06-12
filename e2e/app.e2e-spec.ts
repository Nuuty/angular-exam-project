import { AngularExamProjectPage } from './app.po';

describe('angular-exam-project App', () => {
  let page: AngularExamProjectPage;

  beforeEach(() => {
    page = new AngularExamProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
