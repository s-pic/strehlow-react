import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import Actions from '~/state/Actions';
import styled from 'styled-components';
import NavBar from '~/components/Navigation/NavBar';
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Activities from '~/pages/Activities';
import Impressions from '~/pages/Impressions';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends PureComponent {
    getNavEntries = () => Object.keys(config.nav).map(label => ({ label, route: config.nav[label] }));

    render() {
        return (
          <AppWrapper>
            <NavBar entries={this.getNavEntries()} />
            <Switch>
              <Route
                exact
                path={config.nav.Home}
                render={() => (
                  <Home
                    heading={config.texts.Home.heading}
                    subheading={config.texts.Home.subheading}
                  />
                  )}
              />
              <Route exact path={config.nav.Kontakt} component={Contact} />
              <Route exact path={config.nav['Aktivitäten']} component={Activities} />
              <Route exact path={config.nav.Impressionen} component={Impressions} />
              <Route exact path="/" render={() => (<Redirect to={config.nav.Home} />)} />
            </Switch>
          </AppWrapper>
        );
    }
}

export default connect(
    state => state,
    Actions
)(App);
