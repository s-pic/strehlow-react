import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'unistore/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Store from '~/state/Store';
import App from '~//App';
import GlobalStyles from '~/styles/Global';

const root = document.createElement('div');

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Fragment>
        <GlobalStyles />
        <App />
      </Fragment>
    </Router>
  </Provider>,
    root
);

document.body.appendChild(root);
