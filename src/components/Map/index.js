import React, { Fragment } from 'react';
import Map from './Map';
import LayerSwitcher from './LayerSwitcher';
import PopupMarker from './PopupMarker';

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
            popupContent={config.meta.contact.adress.replace(',', ',<br>')}
            onMarkerClick={() => onMarkerClick(map)}
          />
        </Fragment>
        )}
    </Map>
);
};
