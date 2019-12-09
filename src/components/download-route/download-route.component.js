import React from 'react';
import { Store } from '../../store/app.store';

const DownloadRoute = () => {
    const { state, dispatch } = React.useContext(Store);
    const json = state.geoJSON;
    return (
        <button >Download Route</button>
    )
}

export default DownloadRoute;