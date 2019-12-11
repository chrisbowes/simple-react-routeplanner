import React from 'react';
import styled from 'styled-components';

const InfoBoxEl = styled.div`
    border-radius: 0.3rem;
    box-sizing: border-box;
    border: 1px solid #e1e1e1;
    padding: 1rem;
    line-height: 1.2;
    font-size: 0.8rem;
    `;

const InfoBox = (props) => {
    return (
        <InfoBoxEl>
            {props.children}
        </InfoBoxEl>
    )
};

export default InfoBox;