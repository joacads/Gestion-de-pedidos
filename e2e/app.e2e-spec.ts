import { AdminLTEAngular2Page } from './app.po';

describe('admin-lte-angular2 App', () => {
  let page: AdminLTEAngular2Page;

  beforeEach(() => {
    page = new AdminLTEAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
