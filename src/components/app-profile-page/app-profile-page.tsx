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
            <td>1.0.7</td>
          </tr>
          <tr>
            <td>FLUID Library</td>
            <td><a href="https://www.npmjs.com/package/fluid-library" target="_blank">Visit</a></td>
            <td>1.0.4</td>
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

        </div>
      );
    }
  }
}
