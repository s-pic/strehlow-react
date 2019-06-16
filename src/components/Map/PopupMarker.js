import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

const Marker = styled.div`
            background-size: cover;
            border-radius: 50%;
            cursor: pointer;
        `;

class PopupMarker extends PureComponent {
    static propTypes = {
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        popupContent: PropTypes.instanceOf(Element).isRequired,
        onMarkerClick: PropTypes.func.isRequired,
        markerImageSrc: PropTypes.string.isRequired,
        markerStyle: PropTypes.shape({
            scale: PropTypes.number,
            border: PropTypes.string,
            dropShadow: PropTypes.bool
        })
    }

    static defaultProps = {
        markerStyle: {
            scale: 1,
            border: '1px solid white',
            dropShadow: true
        }
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
        const styleCfg = this.props.markerStyle;

        const style = {
            backgroundImage: `url(${this.props.markerImageSrc})`,
            width: `${50 * styleCfg.scale}px`,
            height: `${50 * styleCfg.scale}px`,
            border: styleCfg.border,
            boxShadow: styleCfg.dropShadow ? '0px 6px 4px -1px rgba(54,54,54,0.8)' : ''
        };

        return (
          <Marker
            ref={this.registerMarkerRef}
            style={style}
          />
        );
    }
}

export default PopupMarker;
