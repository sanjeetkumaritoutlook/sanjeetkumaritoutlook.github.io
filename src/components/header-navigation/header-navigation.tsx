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
        <h1>Sanjeet Kumar's Homepage</h1>
    </header>
    );
  }
}
