import React from 'react';
import Waypoint from '../waypoint-list-item/waypoint-list-item.component';
import { Store } from '../../store/app.store';
import styled from 'styled-components';
import InfoBox from '../info-box/info-box.component';

const WaypointListUl = styled.ul`
    margin: 0;
    padding: 0;
    flex-grow: 1;
    overflow: scroll;
`;

const WaypointList = () => {
    const { state, dispatch } = React.useContext(Store);
    const [draggedItem, setDraggedItem] = React.useState();
    const [draggedOverItem, setDraggedOverItem] = React.useState();
    const [markersList, setMarkersList] = React.useState();
    React.useEffect(() => {
        setMarkersList(state.markers)
    },[state.markers])
    const handleOnDragStart = (e, index) => {
        setDraggedItem(state.markers[index]);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };
    const handleOnDragOver = index => {
        setDraggedOverItem(state.markers[index]);  
        if (draggedItem === draggedOverItem) {
          return;
        }   
        let items = state.markers.filter(item => item !== draggedItem);    
        items.splice(index, 0, draggedItem); 
        setMarkersList(items);
         
      };
    const handleOnDragEnd = () => {
        dispatch({ type: 'REORDER_MARKERS', payload: markersList }) 
      };
    return (
        <>
            { state.markers.length ?
            <WaypointListUl>
                { state.markers.map((marker, index) => {
                    return (
                        <Waypoint 
                            key={index}
                            data={marker} 
                            index={index}
                            handleOnDragStart={handleOnDragStart}
                            handleOnDragEnd={handleOnDragEnd}
                            handleOnDragOver={handleOnDragOver}/> 
                    )}
                )}
            </WaypointListUl>
            :
            <InfoBox>
                Add markers to the map to build a sortable list. Delete and rearrange as desired. Then use the download option below to export your route in GPX format.
            </InfoBox>
            }
        </>
    )
}

export default WaypointList;