import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import NavBar from '~/components/Navigation/NavBar';
import Home from '~/pages/Home/Home';
import Contact from '~/pages/Home/Contact';
import Activities from '~/pages/Home/Activities';
import Impressions from '~/pages/Home/Impressions';

import Actions from '~/state/Actions';

const AppWrapper = styled.div`
`;

class App extends PureComponent {
    getNavEntries = () => Object.keys(config.nav).map(label => ({ label, route: config.nav[label] }));

    render() {
        return (
          <AppWrapper>
            <NavBar entries={this.getNavEntries()} />
            <Switch>
              <Route exact path={config.nav.Home} component={Home} />
              <Route exact path={config.nav.Kontakt} component={Contact} />
              <Route exact path={config.nav['Aktivitäten']} component={Activities} />
              <Route exact path={config.nav.Impressionen} component={Impressions} />
              <Route path="/" render={() => (<Redirect to={config.nav.Home} />)} />
            </Switch>
          </AppWrapper>
        );
    }
}

export default connect(
    state => state,
    Actions
)(App);
