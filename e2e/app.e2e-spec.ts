import { NgStarter1.04Page } from './app.po';

describe('ng-starter1.04 App', () => {
  let page: NgStarter1.04Page;

  beforeEach(() => {
    page = new NgStarter1.04Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
