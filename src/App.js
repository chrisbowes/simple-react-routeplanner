import React from 'react';
import Styled from 'styled-components';
import WaypointList from './components/waypoint-list/waypoint-list.component';
import LeafletMap from './components/leaflet-map/leaflet-map.component';
import { StoreProvider } from './store/app.store';

const AppWrapper = Styled.div`
  display: flex;
  `;
const AppSidebar = Styled.div`
  width: 20rem;
  background-color: #333333;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  color: #ffffff;
  `;
const AppTitle = Styled.h1`
  margin: 0;
  padding: 0 0 1rem 0;
  font-size: 1.2rem;
  border-bottom: 1px solid #fff;
  `;

function App() {
  return (
    <StoreProvider>
      <AppWrapper>
        <AppSidebar>
          <AppTitle>Route Builder</AppTitle>
          <WaypointList/>
        </AppSidebar>
        <LeafletMap/>
      </AppWrapper>
    </StoreProvider>
  );
}

export default App;
