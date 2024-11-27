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
    // Dynamically resolve the path to the image file
   const imagePath1 = new URL('../../assets/images/app-starter1.png', import.meta.url).href;
   const imagePath2 = new URL('../../assets/images/app-starter2.png', import.meta.url).href; 
   return (
      <div class="app-home-page">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <div>
          <h1>Steps to create Stencil Web App</h1>
          <h1>Start by npm init stencil and then choose 2nd option</h1>
          <img 
            src={imagePath1}
            style={{
              width: '100%',
              height: '250px',
            }}
            loading="lazy"
        />
         <img 
            src={imagePath2}
            style={{
              width: '100%',
              height: '250px',
            }}
            loading="lazy"
        />
        <h1>Pages</h1>      
        </div>
        <button
          onClick={() => Router.push('/profile/sanjeet')}
        >
          Profile Page
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
