import { Component, Prop, h } from '@stencil/core';
//renamed tag to avoid conflict with html custom element of npm package
//https://www.freelancer.com/
//npm i freelancer-web-app
//https://codepen.io/JackEdwardLyons/pen/azoxoQa
//https://www.freelancer.com/u/HawkGeek
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
            <td>2.0.6</td>
          </tr>
          <tr>
            <td>FLUID Library</td>
            <td><a href="https://www.npmjs.com/package/fluid-library" target="_blank">Visit</a></td>
            <td>1.0.5</td>
          </tr>
          <tr>
            <td>@my-scope/hello-package (Private Registry)</td>
            <td><a href="https://github.com/sanjeetkumaritoutlook/npm-private" target="_blank">Visit</a></td>
            <td>1.1.2</td>
          </tr>
          </table>
         <p>External Certifications/Profile Pages:</p>
          <table>
          <tr>
            <th>Category</th>
            <th>URL</th>
          </tr>
          <tr>
            <td>AWS</td>
            <td><a href="https://www.credly.com/users/sanjeet-kumar.8f5d5b31" target="_blank">Visit</a>      <a href="https://credentials.veeva.com/profile/sanjeetkumar205395/wallet" target="_blank">Visit</a></td>
          </tr>
          <tr>
            <td>Github profile</td>
            <td><a href="https://github.com/sanjeetkumaritoutlook/" target="_blank">Visit</a></td>
          </tr>
          <tr>
            <td>stackoverflow profile</td>
            <td><a href="https://stackoverflow.com/users/5529142/sanjeet-kumar" target="_blank">Visit</a></td>
          </tr>
          <tr>
            <td>Medium profile</td>
            <td><a href="https://medium.com/@sanjeetkumarit" target="_blank">Visit</a></td>
          </tr>
          <tr>
            <td>npm profile</td>
            <td><a href="https://www.npmjs.com/~sanjeetkumarit" target="_blank">Visit</a></td>
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
          <td>e-commerce-react (with JS)</td>
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
          <td>Frontend portion(MEAN stack)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/mean-stack-example/" target="_blank">Visit</a></td>
          <td>Angular 16</td>
          </tr>
          <tr>
          <td>Frontend portion(angular - nest - mongodb, using Jest)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-nest" target="_blank">Visit</a></td>
          <td>Angular 17</td>
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
          <td>reactive-native-expo (with TS)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/reactive-native-expo/" target="_blank">Visit</a></td>
          <td>Expo for Web (React Native for web)</td>
          </tr>
          <tr>
          <td>react-tinymce-form (with TS)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/react-tinymce-form/" target="_blank">Visit</a></td>
          <td>React 18.3</td>
          </tr>
          <tr>
          <td>vanilla-ts</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/vanilla-ts/" target="_blank">Visit</a></td>
          <td>Typescript 5.6.2</td>
          </tr>
          <tr>
          <td>personal-forms</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/personal-forms/" target="_blank">Visit</a></td>
          <td>Angular 9</td>
          </tr>
          <tr>
          <td>angular-tour-of-heroes</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-tour-of-heroes" target="_blank">Visit</a></td>
          <td>Angular 9</td>
          </tr>
          <tr>
          <td>sample-communication-subject</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/sample-communication-subject/" target="_blank">Visit</a></td>
          <td>Angular 8</td>
          </tr>
          <tr>
          <td>angular-tinymce-form</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-tinymce-form/" target="_blank">Visit</a></td>
          <td>Angular 12</td>
          </tr>
          <tr>
          <td>nextjs-app (with TS)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/nextjs-app/" target="_blank">Visit</a></td>
          <td>Next 15.1.1 with React 19</td>
          </tr>
          <tr>
          <td>react19-cra (with TS)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/react19-cra/" target="_blank">Visit</a></td>
          <td>React 19</td>
          </tr>
          {/* <tr>
          <td>angular-local-stenciljs</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-local-stenciljs/" target="_blank">Visit</a></td>
          <td>Angular 12</td>
          </tr>
          <tr>
          <td>react-local-stenciljs (with TS)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/react-local-stenciljs/" target="_blank">Visit</a></td>
          <td>React 18.2</td>
          </tr> */}
           <tr>
          <td>new-react-app (with JS)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/new-react-app/" target="_blank">Visit</a></td>
          <td>React 18</td>
          </tr>
          <tr>
          <td>formarray-forms</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/formarray-forms" target="_blank">Visit</a></td>
          <td>Angular 16</td>
          </tr>
          <tr>
          <td>angular-project</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-project" target="_blank">Visit</a></td>
          <td>Angular 16</td>
          </tr>
          <tr>
          <td>angular-testing</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-testing/" target="_blank">Visit</a></td>
          <td>Angular 17</td>
          </tr>
          <tr>
          <td>angular-playwright-e2e</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-playwright-e2e/" target="_blank">Visit</a></td>
          <td>Angular 17</td>
          </tr>
          <tr>
          <td>angular-e2e-cypress</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-e2e-cypress/" target="_blank">Visit</a></td>
          <td>Angular 17</td>
          </tr>
          <tr>
          <td>storybook-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/storybook-app" target="_blank">Visit</a></td>
          <td>Storybook 8.6 in Angular 19</td>
          </tr>
          <tr>
          <td>angular-boilerplate</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular-boilerplate" target="_blank">Visit</a></td>
          <td>Angular 11</td>
          </tr>
          <tr>
          <td>ui-regression-suite</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angular16/" target="_blank">Visit</a></td>
          <td>Angular 15</td>
          </tr>
          <tr>
          <td>standalone server</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/standalone-server/" target="_blank">Visit</a></td>
          <td>HTML</td>
          </tr>
          <tr>
          <td>standalone (Auth0 by okta)</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/standalone/" target="_blank">Visit</a></td>
          <td>Angular 17</td>
          </tr>
          <tr>
          <td>angularjs1-app</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/angularjs1-app/" target="_blank">Visit</a></td>
          <td>AngularJS 1</td>
          </tr>
          <tr>
          <td>web-components</td>
           <td><a href="https://sanjeetkumaritoutlook.github.io/web-components/" target="_blank">Visit</a></td>
          <td>Angular 9</td>
          </tr>
          </table>
          <freelancer-score
        bgColor="#7FDBFF"
        type="card"
        username="sanjeetkumarit"
      ></freelancer-score>

      <freelancer-score
        bgColor="#345589"
        type="minimal"
        username="sanjeetkumarit"
      ></freelancer-score>
        </div>
      );
    }
  }
}
