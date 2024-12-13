import { newSpecPage } from '@stencil/core/testing';
import { FeedbackForm } from '../feedback-form';

describe('feedback-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FeedbackForm],
      html: `<feedback-form></feedback-form>`,
    });
    expect(page.root).toEqualHtml(`
      <feedback-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </feedback-form>
    `);
  });
});
