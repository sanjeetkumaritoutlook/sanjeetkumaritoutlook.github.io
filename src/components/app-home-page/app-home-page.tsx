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
          onClick={() => Router.push('/web-components')}
        >
          StencilJS componennts
        </button>
        <button
          onClick={() => Router.push('/posts-dashboard')}
        >
         Posts dashboard
        </button>
        <div>
          <p>by Default,Stencil Web app creates three components:app-root, app-home, app-profile with Routung from "stencil-router-v2" pre-installed </p>
         <p>To avoid conflict with npm package (stenciljs-components) which has similar naming components, renamed the component in this web app to app-home-page and app-profile-page respectively</p>
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
        </div>
      <h1>Helpful links</h1>
      <p><a href="https://ferolmo.com/">Link 0.</a></p>
      <p><a href="https://github.com/Fdom92/personal-web-site">Link 1.</a></p>
      <p><a href="https://github.com/WebNextNative/web-components/tree/master/src/components">Link 2.</a></p>
      <p><a href="https://medium.com/ionic-book/web-components-how-to-create-a-component-with-stencil-3753c20b1b12">Link 3.</a></p>
      <p><a href="https://docs.github.com/en/actions/about-github-actions/understanding-github-actions">Link 4.</a></p>
     <h1>GitHub Pages</h1>
     <p>GitHub Pages are GitHub feature that allows users to host websites based on their GitHub public repositories for no additional cost.</p>
     <p>GitHub Pages are public web pages for users, organizations, and repositories, that are freely hosted on GitHub’s github.io domain or on a custom domain name of your choice. GitHub Pages are powered by Jekyll behind the scenes, so they’re a great way to host your Jekyll-powered website for free.</p>
     <p>GitHub Pages will look for an index.html , index.md , or README.md file as the entry file for your site. </p>
     <p>For this convert an existing repo into Github Pages (or) create a new public repository named <b>username.github.io</b>, where username is your username (or organization name) on GitHub.</p>
     <p><a href="https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site">Source</a></p>
      <h1>GitHub Actions</h1>
      <p>GitHub Actions is required in scenario where entry file of a repository is not at root directory and the repository is of a framework like React, Angular, StencilJS</p>
      <p>GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.</p>
    <p>GitHub Actions goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.</p>
    <p>You can configure a GitHub Actions workflow to be triggered when an event occurs in your repository, such as a pull request being opened or an issue being created. Your workflow contains one or more jobs which can run in sequential order or in parallel.</p>
      <p>A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.</p>
      </div>
    );
  }
}
