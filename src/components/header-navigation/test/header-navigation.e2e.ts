import { newE2EPage } from '@stencil/core/testing';

describe('header-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<header-navigation></header-navigation>');

    const element = await page.find('header-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
