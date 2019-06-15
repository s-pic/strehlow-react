import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GeoPropTypes from 'geojson-prop-types';
import { Map } from 'mapbox-gl';

// TODO: if needed in the future, allow styling the fill as well as the outline.
// mapbox-gl-js does not allow this easily, two different layers are needed, see
// https://stackoverflow.com/questions/52162989/mapbox-gl-js-changing-polygon-border-width

class GeoJsonOverlay extends PureComponent {
    static propTypes = {
        map: PropTypes.instanceOf(Map).isRequired,
        geoJson: GeoPropTypes.FeatureCollection.isRequired,
        layerId: PropTypes.string,
        // polygonStyle: PropTypes.shape({
        //     fillColor: PropTypes.string,
        //     opacity: PropTypes.number
        // }),
        lineStyle: PropTypes.shape({
            lineColor: PropTypes.string,
            lineWidth: PropTypes.number,
            lineCap: PropTypes.string,
            lineJoin: PropTypes.string
        })
    }

    static defaultProps = {
        layerId: Math.random().toString(36).substring(2, 15), // random string
        // polygonStyle: {
        //     fillColor: 'white',
        //     opacity: 0.1
        // },
        lineStyle: {
            lineColor: '#ffa500',
            lineWidth: 1,
            lineCap: 'round',
            lineJoin: 'round'
        }
    };


    addOverlay = () => {
        const {
            map,
            geoJson,
            layerId,
            // polygonStyle,
            lineStyle
        } = this.props;

        const layerConfig = {
            id: layerId,
            type: 'line',
            source: {
                type: 'geojson',
                data: geoJson
            }
        };

        // if (polygonStyle) {
        //     layerConfig.paint = {
        //         'fill-color': polygonStyle.fillColor,
        //         'fill-opacity': polygonStyle.opacity
        //     };
        // }

        if (lineStyle) {
            layerConfig.paint = {
                'line-color': lineStyle.lineColor,
                'line-width': lineStyle.lineWidth
            };
            layerConfig.layout = {
                'line-join': lineStyle.lineJoin,
                'line-cap': lineStyle.lineCap
            };
        }

        map.addLayer(layerConfig);
    }

    render() {
        this.props.map.on('style.load', this.addOverlay);
        return null;
    }
}


export default GeoJsonOverlay;
