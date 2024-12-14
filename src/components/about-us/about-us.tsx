import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-us',
  styleUrl: 'about-us.css',
  shadow: true,
})
export class AboutUs {
  render() {
      // Dynamically resolve the path to the image file
   const imagePath1 = new URL('../../assets/images/app-starter1.png', import.meta.url).href;
   const imagePath2 = new URL('../../assets/images/app-starter2.png', import.meta.url).href; 
   const imagePath3 = new URL('../../assets/images/githubpages1png.png', import.meta.url).href; 
    return (
      <div>
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
     <h1>Multiple Github pages for multiple repositories</h1>
     <p>In addition to the user/organization site, you can also have project sites for any other repository. The URL for each of these will be in the format https://<b>username</b>.github.io/repository-name.</p><p>
<ul><li>	You can create as many project repositories as you like and enable GitHub Pages on them individually.</li><li>
For each repository, you can enable GitHub Pages under the repository's settings, selecting a branch to host the site (typically main or gh-pages).</li></ul>
<br></br>Example Setup:<br></br>
1.	Repository 1 (repo1):<br></br>
<ul><li>	GitHub Pages URL: https://username.github.io/repo1</li><li>
You can configure this repository to host a website by enabling GitHub Pages in the repository's settings.</li></ul><br></br>
2.	Repository 2 (repo2):
<ul><li>GitHub Pages URL: https://username.github.io/repo2</li><li>
	Similarly, you can enable GitHub Pages on this repository, and it will host a different website.</li></ul><br></br>
How to set up GitHub Pages for a project repository:<br></br>
<ol><li>	Go to the repository you want to use for GitHub Pages.</li>
<li>	In the repository, go to Settings then Pages (located under the "Code and automation" section).</li>
<li>Select the branch you want to use for the Pages site (usually main or gh-pages).</li>
<li>Choose the folder (like /root or /docs)  or "GitHub Actions and workflow" whichever if applicable.</li>
<li>Save the settings, and your site will be live at https://username.github.io/repository-name.</li></ol><br></br>
This way, you can have multiple repositories, each with its own GitHub Pages site.

</p>
<h1>GitHub Pages for a private repository</h1>
<p>you can use GitHub Pages for a private repository, but there are a few important points to keep in mind:<br></br>
<br></br>

Key Details:<br></br>
<strong>GitHub Pages for Private Repositories:</strong><br></br>
<br></br>

GitHub Pages can be enabled for private repositories if you have a <strong>GitHub Pro, Team, or Enterprise</strong> plan. Free plans support GitHub Pages only for public repositories.<br></br>
<img 
            src={imagePath3}
            style={{
              width: '100%',
              height: '250px',
            }}
            loading="lazy"
        />
<strong>Visibility of the Pages:</strong><br></br>

When using GitHub Pages with a private repository, the website generated can still be publicly accessible. The content hosted on GitHub Pages does not inherit the repository's privacy status, so anyone with the link can access it unless further restrictions are applied (e.g., custom access controls).<br></br>
<br></br>
<strong>Restrictions for Private Repositories:</strong>
<br></br>
Ensure that sensitive or confidential information is not included in the repository, as it could inadvertently become exposed through the GitHub Pages site.<br></br></p>
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
