import React, { Fragment } from 'react';
import Map from './Map';
import LayerSwitcher from './LayerSwitcher';
import PopupMarker from './PopupMarker';
import GeoJsonOverlay from './GeoJsonOverlay';
import * as propertyShape from '~/geodata/strehlow-property-trimmed.geojson';
import bankImg from '~/images/icon/bank.jpg';
import trainIcon from '~/images/icon/train_publicdomainvectors.png';
import { getStrehlowMarkerPopupContent, getSeehausenMarkerPopupContent } from './PopupContents';

const easing = t => t * (2 - t);

const zoomToMarker = ({ map, position }) => map.flyTo({
  zoom: map.getZoom() === 18 ? config.map.initialView.zoom : 18,
  center: position,
  easing
});

export default () => (
  <Map initialView={config.map.initialView} initialEaseZoom={config.map.initialEaseZoom}>
    {map => (
      <Fragment>
        <LayerSwitcher map={map} />
        <PopupMarker
          map={map}
          position={config.map.strehlowMarkerPosition}
          onMarkerClick={() => zoomToMarker({ map, position: config.map.strehlowMarkerPosition })}
          popupContent={getStrehlowMarkerPopupContent()}
          markerImageSrc={bankImg}
        />
        <PopupMarker
          map={map}
          position={config.map.station.longLat}
          onMarkerClick={() => zoomToMarker({ map, position: config.map.station.longLat })}
          popupContent={getSeehausenMarkerPopupContent()}
          markerImageSrc={trainIcon}
          markerStyle={{ scale: 0.5, dropShadow: true, border: `1px solid ${config.colors.black}` }}
        />
        <GeoJsonOverlay
          map={map}
          geoJson={propertyShape}
          layerId="strehlow-property"
        />
      </Fragment>
      )}
  </Map>
  );
