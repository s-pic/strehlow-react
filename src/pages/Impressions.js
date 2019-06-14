import React from 'react';
import { Main } from '~/components/MainSection';
import ImageGallery from '~/components/ImageGallery';


const Impressions = () => (
  <Main>
    <ImageGallery images={config.galleryImages.impressions} />
  </Main>
);

export default Impressions;
