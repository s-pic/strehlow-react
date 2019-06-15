import React, { Fragment } from 'react';
import Map from './Map';
import LayerSwitcher from './LayerSwitcher';
import PopupMarker from './PopupMarker';
import { formatAdress } from '~/util/format';
import GeoJsonOverlay from './GeoJsonOverlay';
import * as propertyShape from '~/geodata/strehlow-property-trimmed.geojson';
import bankImg from '~/images/icon/bank.jpg';

const getStrehlowMarkerPopupContent = () => {
  // TODO: find a better way to render dom node using a template, something like handlebars
  const div = document.createElement('div');
  const adress = document.createElement('adress');
  adress.innerHTML = formatAdress(config.contact.adress);
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
};

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
            onMarkerClick={() => onMarkerClick(map)}
            popupContent={getStrehlowMarkerPopupContent()}
            markerImageSrc={bankImg}
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
