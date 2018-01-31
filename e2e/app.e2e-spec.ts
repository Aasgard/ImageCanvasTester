import { ImageManipulatorTestPage } from './app.po';

describe('image-manipulator-test App', () => {
  let page: ImageManipulatorTestPage;

  beforeEach(() => {
    page = new ImageManipulatorTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
