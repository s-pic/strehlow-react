import React from 'react';
import { Main } from '~/components/MainSection';

import ImageGallery from '~/components/ImageGallery';

const Activities = () => (
  <Main>
    <ImageGallery images={config.galleryImages.activities} />
  </Main>
);

export default Activities;
