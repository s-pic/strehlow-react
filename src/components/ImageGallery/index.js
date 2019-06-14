import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

const ImageGallery = ({ images }) => (
  <Gallery
    images={images}
    enableImageSelection={false}
    rowHeight={320}
  />
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string,
            thumbnailWidth: PropTypes.number,
            thumbnailHeight: PropTypes.number,
            caption: PropTypes.string
        })
    ).isRequired
};

export default ImageGallery;
