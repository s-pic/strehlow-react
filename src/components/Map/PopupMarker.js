import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import bankImg from '~/images/impressions/bank.jpg';

const Marker = styled.div`
    background-image: url(${bankImg});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid white;
    box-shadow: 0px 6px 4px -1px rgba(54,54,54,0.8);
`;

class PopupMarker extends PureComponent {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    componentDidMount() {
        const { map, position } = this.props;

        const popup = new mapboxgl.Popup({ offset: 25 })
            .setText(`${config.meta.adress}`);

        new mapboxgl.Marker(this.markerContainer)
            .setLngLat(position)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map);
    }

    registerMarkerRef = (el) => {
        this.markerContainer = el;
    }

    render() {
        return (
          <Marker ref={this.registerMarkerRef} />
        );
    }
}

export default PopupMarker;
