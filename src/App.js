import React from 'react';
import Styled from 'styled-components';
import WaypointList from './components/waypoint-list/waypoint-list.component';
import LeafletMap from './components/leaflet-map/leaflet-map.component';
import { StoreProvider } from './store/app.store';

const AppWrapper = Styled.div`
  display: flex;
  `
const AppSidebar = Styled.div`
  width: 20rem;
  background-color: #333333;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  color: #ffffff;
  `
function App() {
  return (
    <StoreProvider>
      <AppWrapper>
        <AppSidebar>
          <h1>Title</h1>
          <WaypointList/>
        </AppSidebar>
        <LeafletMap/>
      </AppWrapper>
    </StoreProvider>
  );
}

export default App;
