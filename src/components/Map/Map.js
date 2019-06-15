import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import Actions from '~/state/Actions';
import mapboxgl, { NavigationControl } from 'mapbox-gl';
import styled from 'styled-components';
import { wait } from '~/util/async';
import { media } from '~/styles/Utils';


const MapWrapper = styled.div`
    height: 100%;

    ${media.m`
        .mapboxgl-ctrl-top-right {
            top: 60px;
        }
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

        // handle the case that just before the map was loaded, the containing div hat scrollbars
        wait(1000).then(() => {
            this.resizeMap();
        });
    }

    componentDidUpdate(prevProps) {
        const wasSqueezed = prevProps.layout.navBarCollapsed;
        const isSqueezed = this.props.layout.navBarCollapsed;
        if (wasSqueezed !== isSqueezed) {
            wait(500).then(() => {
                this.resizeMap();
            });
        }
    }

    componentWillUnmount() {
        this.map.remove();
    }

    registerMapRef = (el) => {
        this.mapContainer = el;
    }

    resizeMap = () => {
        this.map.resize();
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

export default connect(
    state => state,
    Actions
  )(Map);
