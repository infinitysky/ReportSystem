import { ReportSystem2Page } from './app.po';

describe('report-system2 App', () => {
  let page: ReportSystem2Page;

  beforeEach(() => {
    page = new ReportSystem2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
