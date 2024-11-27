import { newSpecPage } from '@stencil/core/testing';
import { AppHeader } from '../posts-dashboard';

describe('posts-dashboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppHeader],
      html: `<posts-dashboard></posts-dashboard>`,
    });
    expect(page.root).toEqualHtml(`
      <posts-dashboard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </posts-dashboard>
    `);
  });
});
