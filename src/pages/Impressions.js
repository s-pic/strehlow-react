import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';
import { media } from '~/styles/Utils';
import ImageGallery from '~/components/ImageGallery';

const Wrapper = styled(Main)`
  display: block;
  overflow: auto;
  
  ${media.s`
    padding: 82px 12px 12px 12px;
   `}
  
  ${media.l`
     padding: 82px 48px 48px 48px;
   `}
`;

const Impressions = () => (
  <Wrapper>
    <ImageGallery images={config.galleryImages.impressions} />
  </Wrapper>
);

export default Impressions;
