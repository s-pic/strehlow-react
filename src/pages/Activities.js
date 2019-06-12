import React from 'react';
import styled from 'styled-components';
import Main from '~/components/MainSection';
import Gallery from 'react-grid-gallery';
import { media } from '~/styles/Utils';

const Wrapper = styled(Main)`
  background-color: #171717;
  display: block;
  overflow: auto;
  
  ${media.s`
    padding: 82px 12px 12px 12px;
   `}
  
  ${media.l`
     padding: 82px 48px 48px 48px;
   `}
`;

const IMAGES = [
    {
        src: 'public/assets/images/activities/trampolin1.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/trampolin1.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Trampolin'
    },
    {
        src: 'public/assets/images/activities/basketball1.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/basketball1.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Basketball'
    },
    {
        src: 'public/assets/images/activities/lagerfeuer2.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/lagerfeuer2.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Lagerfeuer'
    },
    {
        src: 'public/assets/images/activities/beach1.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/beach1.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Beach-Volleyball'
    },
    {
        src: 'public/assets/images/activities/sauna1.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/sauna1.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Saunieren'
    },
    {
        src: 'public/assets/images/activities/fahrrad1.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/fahrrad1.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Fahrradausflüge in die Umgebung'
    },
    {
        src: 'public/assets/images/activities/entspannen1.JPG',
        thumbnail: 'public/assets/images/activities/thumbs/entspannen1.jpg',
        thumbnailWidth: 480,
        thumbnailHeight: 320,
        caption: 'Die Seele baumeln lassen'
    }
    ];
const Activities = () => (
  <Wrapper>
    <Gallery images={IMAGES} enableImageSelection={false} rowHeight={320} />
  </Wrapper>
);

Activities.propTypes = {};

Activities.defaultProps = {};

export default Activities;
