import React from 'react';
import { Store } from '../../store/app.store';
import togpx from 'togpx';

const DownloadRoute = () => {
    const { state, dispatch } = React.useContext(Store);
    const createExportObj = {
        "type": "FeatureCollection",
        "features": [...state.markers, ...state.polylines]
    }
    const downloadDataUri = state.markers.length ? `data:text/json;charset=utf-8,${togpx(createExportObj)}` : null;
    return (
        <>
        { downloadDataUri ?
            <button><a href={downloadDataUri} download="route.gpx">Download Route</a></button>
        :
            <button disabled>Download Route</button>
        }
        </>
    )
}

export default DownloadRoute;