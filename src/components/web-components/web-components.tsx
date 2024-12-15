import { Component, h } from '@stencil/core';
//import { defineCustomElements } from 'stenciljs-components/loader';
@Component({
  tag: 'web-components',
  styleUrl: 'web-components.css',
  shadow: true,
})
export class WebComponents {
 /**
   * Called once just after the component is first connected to the DOM.
     */
 componentDidLoad() {
  // async function initializeStencilComponents() {
  //   console.log('Initializing StencilJS components...');
  //   await defineCustomElements(window, {
  //     resourcesUrl: './build/', // Adjust based on your deployment structure
  //   }); // Pass the global `window` object
  //   console.log('StencilJS components initialized.');
  // }
  // initializeStencilComponents();
  //defineCustomElements();

 }
  render() {
    return (
      <div>
        <p>Below components in this page are rendering from <a href="https://www.npmjs.com/package/stenciljs-components" target="_blank"><strong>stenciljs-components npm package</strong></a></p>
        <p>Sandbox page of this component library:<a href="https://sanjeetkumaritoutlook.github.io/stenciljs-components/" target="_blank">Visit</a></p>
        <p>By Default,Stencil Web app creates three components:app-root, app-home, app-profile with Routung from "stencil-router-v2" pre-installed </p>
         <p>To avoid conflict with npm package (stenciljs-components) which has similar naming components, renamed the component in this web app to app-home-page and app-profile-page respectively</p>
        <my-rich-text-editor initial-value="this is initial value" placeholder="angular placeholder"></my-rich-text-editor>

      <my-card user-name="CodingLocker"></my-card>
      </div>
    );
  }
}
