import React, { PureComponent } from 'react';
import {
 Switch, Route, Redirect, withRouter
} from 'react-router-dom';
import { connect } from 'unistore/react';
import Actions from '~/state/Actions';
import styled from 'styled-components';
import NavBar from '~/components/Navigation/NavBar';
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Activities from '~/pages/Activities';
import Impressions from '~/pages/Impressions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  
 div.transition-group {
       position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

class App extends PureComponent {
    getNavEntries = () => Object.keys(config.nav).map(label => ({ label, route: config.nav[label] }));

    render() {
        const { location } = this.props;
        return (
          <AppWrapper>
            <NavBar entries={this.getNavEntries()} />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
              >
                <Switch location={location}>
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
              </CSSTransition>
            </TransitionGroup>
          </AppWrapper>
        );
    }
}

export default withRouter(connect(
    state => state,
    Actions
)(App));