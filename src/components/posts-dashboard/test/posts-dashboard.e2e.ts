import { newE2EPage } from '@stencil/core/testing';

describe('posts-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<posts-dashboard></posts-dashboard>');

    const element = await page.find('posts-dashboard');
    expect(element).toHaveClass('hydrated');
  });
});
