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
          Welcome to Sanjeet Kumar's Home Page. You can use this Stencil App Starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <h1>Pages</h1>
        <button
          onClick={() => Router.push('/profile/sanjeet')}
        >
          Profile Page
        </button>
        <button
          onClick={() => Router.push('/feedback-form')}
        >
          Feedback Form
        </button>
        <button
          onClick={() => Router.push('/about-us')}
        >
         About Website
        </button>
        <button
          onClick={() => Router.push('/web-components')}
        >
          StencilJS componennts
        </button>
        <button
          onClick={() => Router.push('/posts-dashboard')}
        >
         Posts dashboard
        </button>
            </div>
    );
  }
}
