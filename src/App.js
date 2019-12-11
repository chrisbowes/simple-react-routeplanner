import React from 'react';
import Styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import WaypointList from './components/waypoint-list/waypoint-list.component';
import LeafletMap from './components/leaflet-map/leaflet-map.component';
import DownloadRoute from './components/download-route/download-route.component';
import { StoreProvider } from './store/app.store';

library.add(faTrashAlt, faBars);

const AppWrapper = Styled.div`
  display: flex;
  `;
const AppSidebar = Styled.div`
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
const AppTitle = Styled.h1`
  margin: 0 0 3rem 0;
  padding: 0 0 1rem 0;
  font-size: 1.2rem;
  border-bottom: 1px solid #fff;
  `;

function App() {
  return (
    <StoreProvider>
      <AppWrapper>
      <FontAwesomeIcon icon="fa-trash-alt" />
        <AppSidebar>
          <div>
            <AppTitle>Route Builder</AppTitle>
            <WaypointList/>
          </div>
          <DownloadRoute/>
        </AppSidebar>
        <LeafletMap/>
      </AppWrapper>
    </StoreProvider>
  );
}

export default App;
