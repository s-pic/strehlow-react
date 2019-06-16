// import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 //  ${styledNormalize}
  
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
    overflow:hidden;
  }

  a {
    color: ${config.colors.linkBlue}
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

  // animations

  .wiggle {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) 1s both;
    backface-visibility: hidden;
    perspective: 1000px;
    
    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
  
      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }

      30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }

  // mapbox popup

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
