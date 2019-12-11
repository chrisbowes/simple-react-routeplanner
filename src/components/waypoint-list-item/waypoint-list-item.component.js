import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Store } from '../../store/app.store';
import styled from 'styled-components';

const WaypointListLi = styled.li`
    list-style-type: none;
    margin: 0.2rem 0;
    padding: 0.2rem 0;
    box-sizing: border-box;
`;

const WaypointListItemInner = styled.div`
    display: flex;
    justify-content: space-between;
`;

const WaypointButton = styled.button`
    color: #747474;
    background-color: #383838;
    border: none;
    font-size: 1rem;
    margin: 0;
    padding: 0;
`;

const WaypointLabel = styled.span`
    display: inline-block;
    padding: 0 1rem;
`;

const Waypoint = (props) => {
    const { dispatch } = React.useContext(Store);
    return (
        <WaypointListLi onDragOver={() => props.handleOnDragOver(props.index)}>
            <WaypointListItemInner
                draggable
                onDragStart={e => props.handleOnDragStart(e, props.index)}
                onDragEnd={props.handleOnDragEnd}>
                <span>
                    <WaypointButton><FontAwesomeIcon icon="bars" /></WaypointButton>
                    <WaypointLabel>Waypoint {props.index + 1}</WaypointLabel>
                </span>
                <WaypointButton onClick={() => dispatch({ type: 'DELETE_MARKER', payload: props.data })}><FontAwesomeIcon icon="trash-alt" /></WaypointButton>
            </WaypointListItemInner>
        </WaypointListLi>
    )
}

export default Waypoint;