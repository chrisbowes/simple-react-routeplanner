import React from 'react';
import { Store } from '../../store/app.store';
import Styled from 'styled-components';

const WaypointListLi = Styled.li`
    list-style-type: none;
    margin: 0.2rem 0;
    padding: 0.2rem 0;
    box-sizing: border-box;
    `;

const WaypointListItemInner = Styled.div`
    display: flex;
    justify-content: space-between;
    `;

const Waypoint = (props) => {
    const { dispatch } = React.useContext(Store);
    return (
        <WaypointListLi onDragOver={() => props.handleOnDragOver(props.index)}>
            <WaypointListItemInner
            draggable
            onDragStart={e => props.handleOnDragStart(e, props.index)}
            onDragEnd={props.handleOnDragEnd}>
                <span>Waypoint item { props.index + 1 }</span>
                <button onClick={() => dispatch({ type: 'DELETE_MARKER', payload: props.data })}>Delete</button>
            </WaypointListItemInner>
        </WaypointListLi>
    )
}

export default Waypoint;