import { newE2EPage } from '@stencil/core/testing';

describe('feedback-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<feedback-form></feedback-form>');

    const element = await page.find('feedback-form');
    expect(element).toHaveClass('hydrated');
  });
});
