import React, { PureComponent, Fragment } from 'react';
import mapboxgl, { NavigationControl } from 'mapbox-gl';
import styled from 'styled-components';
import { media } from '~/styles/Utils';


const MapWrapper = styled.div`
    height: calc(100% - ${config.layout.navBar.height});

    ${media.m`
        height: 100%;
    `}
`;

mapboxgl.accessToken = process.env.MAPBOX_KEY_DEV || config.map.tkn;

class Map extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
    }

    componentDidMount() {
        const { zoom, center } = config.map.initialView;

        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/outdoors-v9',
            zoom,
            center
        });

        // keep map object in global scope during dev
        if (process.env.NODE_ENV === 'development') {
            window.mMap = this.map;
        }

        this.addControls();

        this.setState({ map: this.map });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    registerMapRef = (el) => {
        this.mapContainer = el;
    }

    addControls = () => {
        // add controls
        const nav = new NavigationControl();
        this.map.addControl(nav, 'bottom-right');

        this.map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    }

    render() {
        return (
          <Fragment>
            <MapWrapper ref={this.registerMapRef} />
            {this.props.children && this.state.map && this.props.children(this.state.map)}
          </Fragment>
        );
    }
}

export default Map;
