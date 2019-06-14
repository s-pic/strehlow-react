import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${styledNormalize}
  
  * {
    box-sizing: border-box;
  }
  
  html {
      height: 100%;
      width: 100%;
    }

  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    @import url('https://fonts.googleapis.com/css?family=Great+Vibes|Pinyon+Script');
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    position: relative;
    font-family: Raleway, Helvetica, sans-serif;
    color: ${config.colors.black};
    background-color: black;
    overflow:hidden;
  }
  
   #root {
      height: 100%;
      position: relative;
   }
  
  // router-transitions
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  } 


  ${'' /* mapbox popup */}

.custom-popup {

  .mapboxgl-popup-content {
    border-radius: 6px;
    padding: 12px;
  }

  .mapboxgl-popup-close-button {
    font-size: 14px;
  }
} 
`;
