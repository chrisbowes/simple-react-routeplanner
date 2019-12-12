import React from 'react';
import { Store } from '../../store/app.store';
import togpx from 'togpx';
import styled from 'styled-components';

const DownloadButton = styled.button`
    border: 0;
    background-color: #c3e452;
    padding: 0.8rem;
    border-radius: 5px;
    color: #383838;
    font-size: 1rem;
    font-weight: bold;
    opacity: 1;
    transition: opacity 0.3s;
    a {
        text-decoration: none;
        color: inherit;
    }
    :disabled {
        opacity: 0;
    }
`;

const DownloadRoute = () => {
    const { state } = React.useContext(Store);
    const createExportObj = {
        "type": "FeatureCollection",
        "features": [...state.markers, ...state.polylines]
    }
    const downloadDataUri = state.markers.length ? `data:text/json;charset=utf-8,${togpx(createExportObj)}` : null;
    return (
        <>
        { downloadDataUri ?
            <DownloadButton><a href={downloadDataUri} download="route.gpx">Download Route</a></DownloadButton>
        :
            <DownloadButton disabled>Download Route</DownloadButton>
        }
        </>
    )
}

export default DownloadRoute;