import React from 'react';
import Waypoint from '../waypoint-list-item/waypoint-list-item.component';
import { Store } from '../../store/app.store';
import Styled from 'styled-components';

const WaypointListUl = Styled.ul`
    margin: 3rem 0 0 0;
    padding: 0;
    `;

const WaypointList = () => {
    const { state, dispatch } = React.useContext(Store);
    const [draggedItem, setDraggedItem] = React.useState();
    const [draggedOverItem, setDraggedOverItem] = React.useState();
    const [markersList, setMarkersList] = React.useState();
    React.useEffect(() => {
        setMarkersList(state.markers)
    },[])
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
    )
}

export default WaypointList;