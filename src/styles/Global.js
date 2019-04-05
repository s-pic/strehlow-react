import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { media } from '~/styles/Utils';

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
    width: 100%
    position: relative;
    font-family: Raleway, Helvetica, sans-serif;
    color: ${config.colors.black};
  }
  
   #root {
      height: 100%;
      position: relative;
   }
  
  h2 {
      font-family: "Pinyon Script", Helvetica, sans-serif;
      font-size: 36px;
      color: #fff;
      
      ${media.s`
        margin-bottom: 24px;
      `}
  }
`;
