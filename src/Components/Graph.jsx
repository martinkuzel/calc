import React from 'react'
import styled from 'styled-components'

const Icon = styled.img`
    width: 20%;
`;

const Graph = ({toggleGraph}) => {

    toggleGraph(true);

    return (
        <div>
            <h1>Graph will be he soon ;-)</h1>
            <Icon src='under-construction.svg' alt="Under construction"></Icon>
        </div>
    )
}

export default Graph