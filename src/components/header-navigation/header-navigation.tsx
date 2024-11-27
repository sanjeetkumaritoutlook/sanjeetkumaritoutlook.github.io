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
      <nav>
        <a href="/profile/sanjeet" class="nav-link" >Profile</a>
        <a href="/web-components" class="nav-link" >StencilJS components</a>
        <a href="/posts-dashboard" class="nav-link">Posts Dashboard</a>
      </nav>
    </header>
    );
  }
}
