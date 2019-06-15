import React, { Fragment } from 'react';
import Map from './Map';
import LayerSwitcher from './LayerSwitcher';
import PopupMarker from './PopupMarker';
import { formatAdress } from '~/util/format';
import GeoJsonOverlay from './GeoJsonOverlay';
import * as propertyShape from '~/geodata/strehlow-property-trimmed.geojson';

export default () => {
  const onMarkerClick = map => map.easeTo({
    zoom: map.getZoom() === 18 ? config.map.initialView.zoom : 18,
    center: config.map.markerPosition
  });


  return (
    <Map>
      {map => (
        <Fragment>
          <LayerSwitcher map={map} />
          <PopupMarker
            map={map}
            position={config.map.markerPosition}
            popupContent={formatAdress(config.contact.adress)}
            onMarkerClick={() => onMarkerClick(map)}
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
};
