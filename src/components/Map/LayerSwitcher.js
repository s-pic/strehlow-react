import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Layers } from 'react-feather';
import { media } from '~/styles/Utils';

const Wrapper = styled.div`
    position: absolute;
    top:  10px;
    left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: rgb(255,255,255);
    cursor: pointer;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px;

    ${media.m`
        top: 60px;
    `}
`;

class LayerSwitcher extends PureComponent {
    toggleLayer = () => {
        const { map } = this.props;

        const layerId = map.getStyle().name === 'Mapbox Outdoors'
            ? 'satellite-v9'
            : 'outdoors-v11';

        map.setStyle(`mapbox://styles/mapbox/${ layerId}`);
    }

    render() {
        return (
          <Wrapper onClick={this.toggleLayer}>
            <Layers />
          </Wrapper>
        );
    }
}

export default LayerSwitcher;
