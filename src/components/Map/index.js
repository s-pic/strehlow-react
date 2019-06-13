import React, { Fragment } from 'react';
import Map from './Map';
import LayerSwitcher from './LayerSwitcher';
import PopupMarker from './PopupMarker';

export default () => (
  <Map>
    {map => (
      <Fragment>
        <LayerSwitcher map={map} />
        <PopupMarker map={map} position={config.map.markerPosition} />
      </Fragment>
        )}
  </Map>
);
