import React from 'react';
import LeafletMap from '../leaflet-map/leaflet-map.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Store } from '../../store/app.store';
import styled from 'styled-components';

const LeafletMapLoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LeafletMapLoaderContent = styled.div`
  text-align: center;
  line-height: 1.5;  
`;
const LoadingText = styled.div`
  color: #666666;
  margin: 2rem;
`;

const LeafletMapLoader = () => {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch({ type: 'SET_USER_LOCATION', payload: { lat: position.coords.latitude, lng: position.coords.longitude, zoom: 10 } })
    },
      (error) => {
        console.error(JSON.stringify(error))
        dispatch({ type: 'SET_USER_LOCATION', payload: { lat: 0, lng: 0, zoom: 2 } })
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    )
  }, [dispatch]);

  return (
    <LeafletMapLoaderWrapper>
      {state.userLocation ?
        <LeafletMap />
        :
        <LeafletMapLoaderContent>
          <FontAwesomeIcon icon="circle-notch" spin size='3x' style={{ color: '#0f86e8' }} />
          <LoadingText>loading map and setting initial location</LoadingText>
        </LeafletMapLoaderContent>
      }
    </LeafletMapLoaderWrapper>

  )
}

export default LeafletMapLoader;