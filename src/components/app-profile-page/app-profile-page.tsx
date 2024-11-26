import { Component, Prop, h } from '@stencil/core';
//renamed tag to avoid conflict with html custom element of npm package
@Component({
  tag: 'app-profile-page',
  styleUrl: 'app-profile-page.css',
  shadow: true,
})
export class AppProfile {
  @Prop() name: string;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    debugger;
    if (this.name) {
      return (
        <div class="app-profile-page">
          <p>Hello! My name is {this.normalize(this.name)}. My name was passed in through a route param!</p>
        </div>
      );
    }
  }
}
