import createStore from 'unistore';
import devtools from 'unistore/devtools';
import { isFirstVisit } from '~/util/usage';

const initialState = {
    layout: {
      navBarCollapsed: config.layout.navBar.initiallyCollapsed
    },
    usage: {
      isFirstVisit: isFirstVisit()
    }
  };

const Store = process.env.NODE_ENV === 'production'
? createStore(initialState)
: devtools(createStore(initialState));

export default Store;
