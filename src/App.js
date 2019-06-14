import React, { PureComponent } from 'react';
import {
  Switch, Route, Redirect, withRouter
} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '~/components/Navigation';
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Journey from '~/pages/Journey';
import Activities from '~/pages/Activities';
import Impressions from '~/pages/Impressions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
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

const StyledTransitionGroup = styled(TransitionGroup)`
  flex: 1;
`;


class App extends PureComponent {
  getNavEntries = () => Object.keys(config.nav).map(label => ({ label, route: config.nav[label] }));

  getSectionTitle = () => {
      const currentRoute = this.props.location.pathname;

      return this.isLanding()
        ? config.meta.title
      : Object.keys(config.nav).find(key => config.nav[key] === currentRoute);
  }

  isLanding = () => {
    const currentRoute = this.props.location.pathname;
    return currentRoute === config.nav.Home;
  }

  render() {
    const { location } = this.props;
    return (
      <AppWrapper>
        <NavBar
          entries={this.getNavEntries()}
          title={this.getSectionTitle()}
          hasDarkBg={this.isLanding()}
        />
        <StyledTransitionGroup>
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
              <Route
                exact
                path={config.nav.Kontakt}
                render={() => (
                  <Contact
                    heading={config.texts.Contact.heading}
                    footerText={`${config.texts.Contact.footerText} ${config.meta.author.name}`}
                    authorContacts={config.meta.author.contacts}
                  />
              )}
              />
              <Route exact path={config.nav.Anreise} component={Journey} />
              <Route exact path={config.nav['Aktivitäten']} component={Activities} />
              <Route exact path={config.nav.Impressionen} component={Impressions} />
              <Route exact path="/" render={() => (<Redirect to={config.nav.Home} />)} />
              <Route render={() => <Redirect to={config.nav.Home} />} />
            </Switch>
          </CSSTransition>
        </StyledTransitionGroup>
      </AppWrapper>
    );
  }
}

export default withRouter(App);
