import React from 'react'

export const Store = React.createContext();

const initialState = {
    markers: [],
    geoJSON: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_MARKER':
      return { ...state, markers: [...state.markers, action.payload]};
    case 'DELETE_MARKER':
      return {...state, markers: [...state.markers.filter((marker) => marker !== action.payload)]};
    case 'REORDER_MARKERS':
        return {...state, markers: action.payload}
    case 'UPDATE_GEO_JSON':
        return {...state, geoJSON: action.payload}
    default:
      throw new Error();
  }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}