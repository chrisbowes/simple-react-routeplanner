import React from 'react';
import L from 'leaflet';
import Styled from 'styled-components';
import { Store } from '../../store/app.store';


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
        let polylineGeoJson = [];
        if (state.markers.length) {
            const polyLineCoords = [];
            state.markers.map((marker) => {
                const latlng = { lat: marker.geometry.coordinates[1], lng: marker.geometry.coordinates[0] };
                polyLineCoords.push(latlng);
                L.marker(latlng).addTo(layerRef.current)
            });
            L.polyline(polyLineCoords, { color: 'red' }).addTo(layerRef.current);
            polylineGeoJson = [...polylineGeoJson, L.polyline(polyLineCoords, { color: 'red' }).toGeoJSON()]
        }
        dispatch({ type: 'UPDATE_POLYLINES', payload: polylineGeoJson });
    }, [state.markers]);

    return (
        <MapWrapper id='map'></MapWrapper>
    )
}

export default LeafletMap;