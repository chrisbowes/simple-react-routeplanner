import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faBars, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import WaypointList from './components/waypoint-list/waypoint-list.component';
import LeafletMapLoader from './components/leaflet-map-loader/leaflet-map-loader.component';
import DownloadRoute from './components/download-route/download-route.component';
import { StoreProvider } from './store/app.store';

library.add(faTrashAlt, faBars, faCircleNotch);

const AppWrapper = styled.div`
  display: flex;
`;
const AppSidebar = styled.div`
  width: 20rem;
  background-color: #383838;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const AppTitle = styled.h1`
  margin: 0 0 3rem 0;
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
            <WaypointList />
            <DownloadRoute />
        </AppSidebar>
        <LeafletMapLoader />
      </AppWrapper>
    </StoreProvider>
  );
}

export default App;
