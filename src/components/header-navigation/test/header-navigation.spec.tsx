import { newSpecPage } from '@stencil/core/testing';
import { HeaderNavigation } from '../header-navigation';

describe('header-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderNavigation],
      html: `<header-navigation></header-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <header-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </header-navigation>
    `);
  });
});
