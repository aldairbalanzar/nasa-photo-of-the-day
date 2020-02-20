import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    width: 86%;
    height: 32px;
    background-color: rgba(207,180,161,.36);
    border-radius: 2px;
    margin: 4% 0 0%;
`;

const CardTitle = styled.h2 `
    width: 50%;
    margin: 0;
`;

const CardDate = styled.h2 `
    width: 50%;
    margin: 0;
`;

function CardHeader ({data}) {
    return(
        <HeaderContainer>
            <CardTitle>{data.title}</CardTitle>
            <CardDate>{data.date}</CardDate>
        </HeaderContainer>
    )
}

export default CardHeader;