import { Component, Prop, h } from '@stencil/core';
//renamed tag to avoid conflict with html custom element of npm package
@Component({
  tag: 'app-profile-page',
  styleUrl: 'app-profile-page.css',
  shadow: true,
})
export class AppProfile {
  @Prop() name: string;

/**
 * Alternate text for the image
 */
@Prop() alt: string = 'Sanjeet Kumar';
 /**
   * Image width (e.g., "200px" or "100%")
   */
 @Prop() width: string = '100px';

 /**
  * Image height (e.g., "100px" or "auto")
  */
 @Prop() height: string = '100px';


  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    // debugger;
    // Use the import.meta.url feature to dynamically resolve the image path during runtime:
   // Dynamically resolve the path to the image file
   const imagePath = new URL('../../assets/images/Sanjeet-Kumar-profile.jpeg', import.meta.url).href;

    if (this.name) {
      return (
        <div class="app-profile-page">
           <img 
            src={imagePath}
            alt={this.alt} 
            style={{
              width: this.width,
              height: this.height,
            }}
            loading="lazy"
        />
          <p>Hello! My name is {this.normalize(this.name)}. My name was passed in through a route param!</p>
        <p>Created two npm packages:</p>
                <table>
          <tr>
            <th>NPM Package Name</th>
            <th>URL</th>
            <th>Version</th>
          </tr>
          <tr>
            <td>stenciljs-components</td>
            <td><a href="https://www.npmjs.com/package/stenciljs-components" target="_blank">Visit</a></td>
            <td>2.0.1</td>
          </tr>
          <tr>
            <td>FLUID Library</td>
            <td><a href="https://www.npmjs.com/package/fluid-library" target="_blank">Visit</a></td>
            <td>1.0.5</td>
          </tr>
          </table>
         <p>External Certifications:</p>
          <table>
          <tr>
            <th>Category</th>
            <th>URL</th>
          </tr>
          <tr>
            <td>AWS</td>
            <td><a href="https://www.credly.com/users/sanjeet-kumar.8f5d5b31" target="_blank">Visit</a></td>
          </tr>
         
          </table>

          <p>My other Projects:</p>
          <table>
          <tr>
            <th>Github Pages</th>
            <th>URL</th>
            <th>Technology</th>
          </tr>
          <tr>
          <td>stenciljs-components</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/stenciljs-components/" target="_blank">Visit</a></td>
          <td>StencilJS 4.7</td>
          </tr>
          <tr>
          <td>e-commerce-angular</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/e-commerce-angular/" target="_blank">Visit</a></td>
          <td>Angular 19</td>
          </tr>
          <tr>
          <td>e-commerce-react</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/e-commerce-react/" target="_blank">Visit</a></td>
          <td>React 18</td>
          </tr>
          <tr>
          <td>angular19-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular19-app/" target="_blank">Visit</a></td>
          <td>Angular 19</td>
          </tr>
          <tr>
          <td>angular16-app (Dashboard)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular16-app/" target="_blank">Visit</a></td>
          <td>Angular 16</td>
          </tr>
          <tr>
          <td>consuming-angular-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/consuming-angular-app/" target="_blank">Visit</a></td>
          <td>Angular 16</td>
          </tr>
          <tr>
          <td>ionic-web-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/ionic-web-app/" target="_blank">Visit</a></td>
          <td>Ionic Angular 17</td>
          </tr>
          <tr>
          <td>react-tinymce-form</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/react-tinymce-form/" target="_blank">Visit</a></td>
          <td>React 18.3</td>
          </tr>
          <tr>
          <td>vanilla-ts</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/vanilla-ts/" target="_blank">Visit</a></td>
          <td>Typescript 5.6.2</td>
          </tr>
          <tr>
          <td>angular-tinymce-form</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-tinymce-form/" target="_blank">Visit</a></td>
          <td>Angular 12</td>
          </tr>
          <tr>
          <td>nextjs-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/nextjs-app/" target="_blank">Visit</a></td>
          <td>Next 15.1.1 with React 19</td>
          </tr>
          {/* <tr>
          <td>angular-local-stenciljs</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-local-stenciljs/" target="_blank">Visit</a></td>
          <td>Angular 12</td>
          </tr>
          <tr>
          <td>react-local-stenciljs</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/react-local-stenciljs/" target="_blank">Visit</a></td>
          <td>React 18.2</td>
          </tr> */}
           <tr>
          <td>new-react-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/new-react-app/" target="_blank">Visit</a></td>
          <td>React 18</td>
          </tr>
          <tr>
          <td>formarray-forms</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/formarray-forms" target="_blank">Visit</a></td>
          <td>Angular 16</td>
          </tr>
          </table>
        </div>
      );
    }
  }
}
