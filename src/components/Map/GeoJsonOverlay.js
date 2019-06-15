import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GeoPropTypes from 'geojson-prop-types';
import { Map } from 'mapbox-gl';

class GeoJsonOverlay extends PureComponent {
    static propTypes = {
        map: PropTypes.instanceOf(Map).isRequired,
        geoJson: GeoPropTypes.FeatureCollection.isRequired,
        layerId: PropTypes.string,
        style: PropTypes.shape({
            fillColor: PropTypes.string,
            opacity: PropTypes.number
        })
    }

    static defaultProps = {
        layerId: Math.random().toString(36).substring(2, 15), // random stri
        style: {
            fillColor: 'orange',
            opacity: 0.5
        }
    };

    addOverlay = () => {
        const {
            map, geoJson, layerId, style
        } = this.props;

        map.addLayer({
            id: layerId,
            type: 'fill',
            source: {
                type: 'geojson',
                data: geoJson
            },
            layout: {},
            paint: {
                'fill-color': style.fillColor,
                'fill-opacity': style.opacity
            }
        });
    }

    render() {
        this.props.map.on('style.load', this.addOverlay);
        return null;
    }
}


export default GeoJsonOverlay;
