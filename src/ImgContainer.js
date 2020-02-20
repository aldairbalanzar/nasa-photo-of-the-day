import React from 'react';
import CardHeader from './CardHeader';
import CardPar from './CardPar'
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    width: 44%;
    border: solid 8px transparent;
    background-image: url(https://i.etsystatic.com/7666691/r/il/46231c/1971450361/il_794xN.1971450361_rkg0.jpg);
    background-size: contain;
    border-image: url(https://data.whicdn.com/images/220193202/original.jpg) 30 stretch;
`;

const Star = styled.p `
    width: 100%;
    font-size: 36px;
    text-align: right;
    margin: 0 8% 0 0;
    color: rgb(250, 202, 30);
`;

const CardImg = styled.img `
    object-fit: scale;
    width: 84%;
    border: solid 8px transparent;
    border-image: url(https://data.whicdn.com/images/220193202/original.jpg) 30 stretch;
`;

function ImgContainer ({data}) {
    return(
        <Card>
            <CardHeader data={data}/>
            <Star> &#x2605; &#x2605; &#x2605; &#x2605;  &#x2605; &#x2605;</Star>
            <CardImg src={data.url}/>
            <CardPar data={data}/>
        </Card>
    )
}

export default ImgContainer;
