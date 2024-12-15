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
        <p>URL of this component library:<a href="https://sanjeetkumaritoutlook.github.io/stenciljs-components/" target="_blank">Visit</a></p>
        <p>by Default,Stencil Web app creates three components:app-root, app-home, app-profile with Routung from "stencil-router-v2" pre-installed </p>
         <p>To avoid conflict with npm package (stenciljs-components) which has similar naming components, renamed the component in this web app to app-home-page and app-profile-page respectively</p>
          
        <my-rich-text-editor initial-value="this is initial value" placeholder="angular placeholder"></my-rich-text-editor>

      <my-card user-name="CodingLocker"></my-card>
      </div>
    );
  }
}
