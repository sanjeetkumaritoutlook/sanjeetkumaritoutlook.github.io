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
        <router-link href="/profile/stencil" class="nav-link" activeClass="active">Profile</router-link>
        <router-link href="/about" class="nav-link" activeClass="active">StencilJS components</router-link>
        <router-link href="/posts-dashboard" class="nav-link" activeClass="active">Posts Dashboard</router-link>
      </nav>
    </header>
    );
  }
}
