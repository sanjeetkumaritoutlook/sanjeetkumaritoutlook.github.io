import { newSpecPage } from '@stencil/core/testing';
import { WebComponents } from '../web-components';

describe('web-components', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebComponents],
      html: `<web-components></web-components>`,
    });
    expect(page.root).toEqualHtml(`
      <web-components>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-components>
    `);
  });
});
