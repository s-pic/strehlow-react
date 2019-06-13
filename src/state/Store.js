import createStore from 'unistore';
import devtools from 'unistore/devtools';

const initialState = {
    layout: {
      navBarCollapsed: config.layout.navBar.initiallyCollapsed
    }
  };

const Store = process.env.NODE_ENV === 'production'
? createStore(initialState)
: devtools(createStore(initialState));

export default Store;
