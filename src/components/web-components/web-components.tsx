import { Component, h } from '@stencil/core';
import { defineCustomElements } from 'stenciljs-components/loader';

@Component({
  tag: 'web-components',
  styleUrl: 'web-components.css',
  shadow: true,
})
export class WebComponents {
 /**
   * Called once just after the component is first connected to the DOM.
     */
  componentWillLoad() {
    this.initializeLibrary();
  }

   //  Called once just after the component fully loaded and the first render() occurs.
   componentDidLoad() {
    console.log('testing Component has loaded and rendered!');
    this.initializeLibrary();
  }

  // Example: Initialize a library
  private initializeLibrary() {
   // Wrap the function to log the registration
   const defineWithLog = (win: any) => {
  defineCustomElements(win);
  
    console.log('Registered Custom Elements:');
  ['my-card', 'my-rich-text-editor'].forEach((tagName) => {
    console.log(`${tagName}:`, customElements.get(tagName));
  });
};

   // Use the modified version
    defineWithLog(window);
  }
  render() {
    return (
      <div>
        <h1>sanjeet</h1>
        <my-rich-text-editor initial-value="this is initial value" placeholder="angular placeholder"></my-rich-text-editor>

      <my-card user-name="CodingLocker"></my-card>
      </div>
    );
  }
}
