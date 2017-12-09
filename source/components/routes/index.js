import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Switch, Redirect, Route } from 'react-router-dom';
import PrivateRoute from '~/components/private-route';
import pages from '~/pages';

@translate([], { wait: true })
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={pages.signin.getPath()}
          component={pages.signin.component}
        />

        <Route
          exact
          component={pages.signup.component}
          path={pages.signup.getPath()}
        />

        <Route
          exact
          component={pages.sendResetInstructions.component}
          path={pages.sendResetInstructions.getPath()}
        />

        <Route
          exact
          component={pages.createNewPassword.component}
          path={pages.createNewPassword.getPath(':token')}
        />

        <Redirect
          exact
          from="/"
          to={pages.app.getPath()}
        />

        <PrivateRoute path={pages.app.getPath()}>
          <pages.app.component>
            <Switch>
              <Route
                exact
                path={pages.app.buyTokens.getPath()}
                component={pages.app.buyTokens.component}
              />

              <Route
                exact
                path={pages.app.dashboard.getPath()}
                component={pages.app.dashboard.component}
              />

              <Route
                exact
                path={pages.app.twitterNews.getPath()}
                component={pages.app.twitterNews.component}
              />

              <Route
                exact
                path={pages.app.timeline.getPath()}
                component={pages.app.timeline.component}
              />

              <Route
                exact
                path={pages.app.howToBuy.getPath()}
                component={pages.app.howToBuy.component}
              />

              <Route
                exact
                path={pages.app.bounty.getPath()}
                component={pages.app.bounty.component}
              />

              <Route
                exact
                path={pages.app.faq.getPath()}
                component={pages.app.faq.component}
              />

              <Redirect
                to={pages.app.buyTokens.getPath()}
              />
            </Switch>
          </pages.app.component>
        </PrivateRoute>

        <Route
          path="*"
          render={() => 'Not found'}
        />
      </Switch>
    );
  }
}
