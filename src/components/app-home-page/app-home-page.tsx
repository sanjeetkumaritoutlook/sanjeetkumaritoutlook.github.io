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
          Welcome to Sanjeet Kumar's Home Page.<p>
          </p> This website is created using <a href="https://github.com/stencil-community/stencil-app-starter">Stencil App Starter</a> and hosted on <a href="https://pages.github.com/">GitHub Pages.</a> You can use  Stencil App Starter to build entire apps all with web components using Stencil! Check out docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <p><strong>Please Note:</strong> Currently, The routing to different pages is not working perfectly and you can navigate to each page, after clicking it from main Home page only. Direct URLs to each individual page is not working. </p>
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
