import { formatAdress } from '~/util/format';

export const getStrehlowMarkerPopupContent = () => {
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
    routingLinkAnchor.href = `https://www.google.com/maps/dir/?api=1&destination=${config.map.strehlowMarkerPosition.slice().reverse().join()}`;

    routingLinkAnchor.target = '_blank';

    routingLinkAnchor.setAttribute('style', 'display:block;padding:8px;margin-top:8px;border:1px solid #007bff; border-radius:12px;');

    div.appendChild(document.createElement('br'));
    div.appendChild(routingLinkAnchor);

    return div;
  };

  export const getSeehausenMarkerPopupContent = () => {
    const div = document.createElement('div');

    const heading = document.createElement('h4');
    heading.innerHTML = config.map.station.name;

    const connectionsText = document.createElement('p');
    connectionsText.setAttribute('style', 'margin-bottom: 1em;');

    connectionsText.innerHTML = 'Hier fahren:';

    const connectionList = document.createElement('ul');
    connectionList.setAttribute('style', 'padding-left: 1em');
    const connections = config.map.station.connections
        .map((conn) => {
            const li = document.createElement('li');
            li.innerHTML = conn;
            return li;
        });
    connections.forEach(conn => connectionList.appendChild(conn));

    const vbbButtonConfig = config.map.station.vbbButton;

    const vbbButton = document.createElement('iframe');
    vbbButton.setAttribute('style', 'border: none;');
    vbbButton.setAttribute('width', vbbButtonConfig.width || 200);
    vbbButton.setAttribute('height', vbbButtonConfig.height || 65);
    vbbButton.setAttribute('src', vbbButtonConfig.src);

    div.appendChild(heading);
    div.appendChild(connectionsText);
    div.appendChild(connectionList);
    div.appendChild(vbbButton);

    return div;
  };
