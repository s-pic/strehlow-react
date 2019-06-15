import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

const Marker = styled.div`
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
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        popupContent: PropTypes.instanceOf(Element).isRequired,
        onMarkerClick: PropTypes.func.isRequired,
        markerImageSrc: PropTypes.string.isRequired
    }

    componentDidMount() {
        const { map, position, popupContent } = this.props;

        this.popup = this.createPopup(popupContent);

        this.marker = this.createMarker({ map, position });

        this.addMarkerClickListener();
    }

    registerMarkerRef = (el) => {
        this.markerContainer = el;
    }

    createPopup = popupContent => new mapboxgl.Popup({
        offset: 25,
        className: 'custom-popup'
     }).setDOMContent(popupContent)

    createMarker = ({ map, position }) => new mapboxgl.Marker(this.markerContainer)
        .setLngLat(position)
        .setPopup(this.popup) // sets a popup on this marker
        .addTo(map)

    addMarkerClickListener = () => {
        this.markerContainer.addEventListener('click', this.props.onMarkerClick);
    }

    render() {
        return (
          <Marker ref={this.registerMarkerRef} style={{ backgroundImage: `url(${this.props.markerImageSrc})` }} />
        );
    }
}

export default PopupMarker;
