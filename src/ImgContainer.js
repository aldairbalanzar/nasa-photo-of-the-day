import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    width: 50%;
    background-color: lightgrey;
`;

const CardTitle = styled.h2 `
    width: 100%;
    color: grey;
`;

const CardPar = styled.p `
    width: 88%;
`;

const CardImg = styled.img `
    object-fit: scale;
    width: 90%;
    padding: 0 0 6%;
`;

function ImgContainer ({data}) {
    return(
        <Card>
            <CardTitle>{data.date}</CardTitle>
            <CardPar>{data.explanation}</CardPar>
            <CardImg src={data.url}/>
            <p></p>
        </Card>
    )
}

export default ImgContainer;
