import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-navigation',
  styleUrl: 'header-navigation.css',
  shadow: true,
})
export class HeaderNavigation {
  render() {
    return (
      <header>
        <h1>Stencil App Starter - by Sanjeet Kumar</h1>
    </header>
    );
  }
}
