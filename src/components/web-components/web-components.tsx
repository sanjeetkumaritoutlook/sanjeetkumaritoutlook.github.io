import { Component, h } from '@stencil/core';

@Component({
  tag: 'web-components',
  styleUrl: 'web-components.css',
  shadow: true,
})
export class WebComponents {
 /**
   * Called once just after the component is first connected to the DOM.
     */
  
  render() {
    return (
      <div>
        <p>URL of this component library:</p>
        <my-rich-text-editor initial-value="this is initial value" placeholder="angular placeholder"></my-rich-text-editor>

      <my-card user-name="CodingLocker"></my-card>
      </div>
    );
  }
}
