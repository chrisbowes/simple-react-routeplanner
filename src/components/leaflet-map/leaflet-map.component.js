import React from 'react';
import L from 'leaflet';
import Styled from 'styled-components';
import { Store } from '../../store/app.store';
import togpx from 'togpx';


const MapWrapper = Styled.div`
    width: 100%;
    height: 100vh;
    `
const LeafletMap = () => {
    const mapRef = React.useRef(null);
    const layerRef = React.useRef(null);
    const { state, dispatch } = React.useContext(Store);
    
    React.useEffect(() => {
        mapRef.current = L.map("map", {
          center: [45.51, -122.68],
          zoom: 16,
          layers: [
            L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
              attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
          ]
        });
        mapRef.current.on('click', (e) => {
            dispatch({ type: 'ADD_MARKER', payload: L.marker(e.latlng).toGeoJSON() })
        });
      }, [dispatch]);

    React.useEffect(() => {
        layerRef.current = L.layerGroup().addTo(mapRef.current);
    }, []);
    
    React.useEffect(() => {
        layerRef.current.clearLayers();
        if(state.markers.length) { 
            const polyLineCoords = [];           
            state.markers.map((marker) => {
                const latlng = {lat:marker.geometry.coordinates[0], lng:marker.geometry.coordinates[1]};
                polyLineCoords.push(latlng); 
                L.marker({lat:marker.geometry.coordinates[1], lng:marker.geometry.coordinates[0]}).addTo(layerRef.current)
            });   
            L.polyline(polyLineCoords, {color: 'red'}).addTo(layerRef.current);
        }
    }, [state.markers]);

    return (
        <MapWrapper id='map'></MapWrapper>
    )
}

export default LeafletMap;