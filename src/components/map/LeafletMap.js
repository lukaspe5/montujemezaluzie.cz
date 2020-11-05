import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import styled from 'styled-components'
import {MapPopupContent} from "./MapPopupContent";

const StyledLeafletMap = styled.div`
  .leaflet-container {
    height: 400px;
    width: 100%;
}
`;

const position = [50.0792, 14.420251];
export const LeafletMap = () => (
    <StyledLeafletMap>
        <Map
            center={position}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
                <Popup>
                    <MapPopupContent/>
                </Popup>
            </Marker>
        </Map>
    </StyledLeafletMap>
)