import { Component, h } from '@stencil/core';
import { Router } from "../..";
//renamed tag to avoid conflict with package custom html element
@Component({
  tag: 'app-home-page',
  styleUrl: 'app-home-page.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home-page">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <div>
        <h1>Pages</h1>
        <a href="/web-components">StencilJS componennts</a><br/>
        <a href="/posts-dashboard">Posts dashboard</a>
        </div>
        <button
          onClick={() => Router.push('/profile/sanjeet')}
        >
          Profile Page
        </button>
      </div>
    );
  }
}
