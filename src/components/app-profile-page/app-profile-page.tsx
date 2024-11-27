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
        />
          <p>Hello! My name is {this.normalize(this.name)}. My name was passed in through a route param!</p>
        </div>
      );
    }
  }
}
