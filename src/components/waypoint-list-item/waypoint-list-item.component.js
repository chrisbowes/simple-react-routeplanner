import React from 'react';
import { Store } from '../../store/app.store';

const Waypoint = (props) => {
    const { dispatch } = React.useContext(Store);
    return (
        <li onDragOver={() => props.handleOnDragOver(props.index)}>
            <div
            draggable
            onDragStart={e => props.handleOnDragEnd(e, props.index)}
            onDragEnd={props.handleOnDragEnd}>
                <span>Waypoint item { props.index + 1 }</span>
                <button onClick={() => dispatch({ type: 'DELETE_MARKER', payload: props.data })}>Delete</button>
            </div>
        </li>
    )
}

export default Waypoint;