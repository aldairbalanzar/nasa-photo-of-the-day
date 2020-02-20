import React from 'react';
import styled from 'styled-components';

const ParContainer = styled.div `
    display: flex;
    justify-content: center;
    width: 86%;
    background-color: rgba(207,180,161,.8);
    margin: 3% 0;
    border-radius: 2px;
`;

const Copyright = styled.span `
    font-weight: bold;
`;
const Par = styled.p `
    border-radius: 2px;
    text-align: left;
    margin: 0;
    padding: 2%;
`;

function CardPar({data}) {
    return(
        <ParContainer>
            <Par> <Copyright>[{data.copyright}/{data.media_type}]</Copyright> {data.explanation}</Par>
        </ParContainer>
    )
}

export default CardPar;