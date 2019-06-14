import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import bankImg from '~/images/icon/bank.jpg';

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
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        popupContent: PropTypes.string.isRequired,
        onMarkerClick: PropTypes.func.isRequired
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

    createPopup = textContent => new mapboxgl.Popup({
        offset: 25,
        className: 'custom-popup'
     }).setDOMContent(this.getPopupContent(textContent))

    createMarker = ({ map, position }) => new mapboxgl.Marker(this.markerContainer)
        .setLngLat(position)
        .setPopup(this.popup) // sets a popup on this marker
        .addTo(map)

    addMarkerClickListener = () => {
        this.markerContainer.addEventListener('click', this.props.onMarkerClick);
    }

    getPopupContent = (markerHtml) => {
        const div = document.createElement('div');
        const adress = document.createElement('adress');
        adress.innerHTML = markerHtml;
        adress.setAttribute('style', 'font-weight: bold; font-size: 14px;');
        div.appendChild(adress);

        const routingLinkText = 'Google Maps Navigation Starten';
        const routingLinkAnchor = document.createElement('a');
        const routingLinkAnchorText = document.createTextNode(routingLinkText);
        routingLinkAnchor.appendChild(routingLinkAnchorText);
        routingLinkAnchor.title = routingLinkText;
        routingLinkAnchor.href = `https://www.google.com/maps/dir/?api=1&destination=${config.map.markerPosition.slice().reverse().join()}`;

        routingLinkAnchor.target = '_blank';

        routingLinkAnchor.setAttribute('style', 'display:block;padding:8px;margin-top:8px;border:1px solid #007bff; border-radius:12px;');

        div.appendChild(document.createElement('br'));
        div.appendChild(routingLinkAnchor);

        return div;
    }

    render() {
        return (
          <Marker ref={this.registerMarkerRef} />
        );
    }
}

export default PopupMarker;
