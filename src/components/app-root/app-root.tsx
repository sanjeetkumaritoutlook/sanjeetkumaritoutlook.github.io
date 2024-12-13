import { Component, h } from '@stencil/core';
//by default it shows in boilerplate code, createRouter also imported in same file
import { Router } from "../../";  //in index.ts its already there so no need to again do const Router = createRouter();

import { Route, match } from "stencil-router-v2";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
            <h1 onClick={() => Router.push("/")}>
              Stencil App Starter
            </h1>
            <header-navigation></header-navigation>
        </header>
        <h1>Pages</h1>
        <main>
          <Router.Switch>
            <Route path="/">
              <app-home-page />
            </Route>

            <Route 
             path={/^\/posts-dashboard/}>
            <posts-dashboard></posts-dashboard>
            </Route> 

            <Route
             path={/^\/web-components/   }>
            <web-components></web-components>
            </Route> 
            <Route
             path={/^\/feedback-form/   }>
            <feedback-form></feedback-form>
            </Route> 
            <Route
              path={match("/profile/:name")}
              render={({ name }) => <app-profile-page name={name} />}
            />
          </Router.Switch>
        </main>
      </div>
    );
  }
}
