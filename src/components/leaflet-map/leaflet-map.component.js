import React from 'react';
import L from 'leaflet';
import styled from 'styled-components';
import { Store } from '../../store/app.store';

const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const LeafletMap = () => {
  const mapRef = React.useRef(null);
  const layerRef = React.useRef(null);
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    mapRef.current = L.map("map", {
      center: [state.userLocation.lat, state.userLocation.lng],
      zoom: state.userLocation.zoom,
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
  }, [dispatch, state.userLocation.lat, state.userLocation.lng, state.userLocation.zoom]);

  React.useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  React.useEffect(() => {
    layerRef.current.clearLayers();
    let polylineGeoJson = [];
    L.CustomIcon = L.Icon.extend({
      options: {
        number: '',
        iconUrl: '',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        className: 'custom-icon'
      },
      createIcon: function () {
        const div = document.createElement('div');
        const label = document.createElement('div');
        label.setAttribute("class", "number");
        label.innerHTML = this.options['number'] || '';
        div.appendChild(label);
        this._setIconStyles(div, 'icon');
        return div;
      },
    });
    if (state.markers.length) {
      const polyLineCoords = [];
      state.markers.map((marker, index) => {
        const latlng = { lat: marker.geometry.coordinates[1], lng: marker.geometry.coordinates[0] };
        polyLineCoords.push(latlng);
        return L.marker(latlng, { icon: new L.CustomIcon({ number: index + 1 }) }).addTo(layerRef.current)
      });
      const newLine = L.polyline(polyLineCoords, { color: '#0f86e8', weight: 5 }).addTo(layerRef.current);
      polylineGeoJson = [...polylineGeoJson, newLine.toGeoJSON()]
    }
    dispatch({ type: 'UPDATE_POLYLINES', payload: polylineGeoJson });
  }, [dispatch, state.markers]);

  return (
    <MapWrapper id='map'></MapWrapper>
  )
}

export default LeafletMap;