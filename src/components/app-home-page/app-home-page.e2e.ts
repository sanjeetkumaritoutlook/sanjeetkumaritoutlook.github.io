import { newE2EPage } from '@stencil/core/testing';

describe('app-home-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home-page></app-home-page>');

    const element = await page.find('app-home-page');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home-page></app-home-page>');

    const element = await page.find('app-home-page >>> button');
    expect(element.textContent).toEqual('Profile Page');
  });
});
