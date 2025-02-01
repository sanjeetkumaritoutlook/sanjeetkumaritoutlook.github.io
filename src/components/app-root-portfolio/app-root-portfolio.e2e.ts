import { newE2EPage } from '@stencil/core/testing';

describe('app-root-portfolio', () => {
  it.skip('renders', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('app-root-portfolio');
    expect(element).toHaveClass('hydrated');
  });

  it.skip('renders the title', async () => {
    const page = await newE2EPage({ url: '/' });

    const element = await page.find('app-root-portfolio >>> h1');
    expect(element.textContent).toEqual('Stencil App Starter');
  });
});
