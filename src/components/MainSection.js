import styled from 'styled-components';
import { media } from '~/styles/Utils';

export const FullHeightMain = styled.div`
  position: relative;
  height: 100%;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Main = styled(FullHeightMain)`
  display: block;
  overflow: auto;

  ${media.s`
    padding: 82px 12px 12px 12px;
  `}

  ${media.l`
    padding: 82px 48px 48px 48px;
  `}
`;
