import { newE2EPage } from '@stencil/core/testing';

describe('web-components', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-components></web-components>');

    const element = await page.find('web-components');
    expect(element).toHaveClass('hydrated');
  });
});
