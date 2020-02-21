import React from 'react';
import CardHeader from './CardHeader';
import CardPar from './CardPar'
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    width: 44%;
    border: solid 10px transparent;
    background-image: url(https://i.etsystatic.com/7666691/r/il/46231c/1971450361/il_794xN.1971450361_rkg0.jpg);
    background-size: contain;
    border-image: url(https://data.whicdn.com/images/220193202/original.jpg) 30 stretch;
`;

const Stars = styled.p `
    width: 100%;
    font-size: 28px;
    text-align: right;
    margin: 1% 8% 1% 0;
    color: rgb(250, 202, 30);
`;

const StarSpan = styled.span `
    color: rgb(250, 202, 30);
    background-color: crimson;
    border-radius: 60px;
    padding: 2px 8px;
    margin: 0 2px;
`;

const CardImg = styled.img `
    object-fit: scale;
    width: 84%;
    border: solid 10px transparent;
    border-image: url(https://data.whicdn.com/images/220193202/original.jpg) 30 stretch;
`;

function ImgContainer ({data}) {
    return(
        <Card>
            <CardHeader data={data}/>
            <Stars>
                <StarSpan>&#x2605;</StarSpan>
                <StarSpan>&#x2605;</StarSpan>
                <StarSpan>&#x2605;</StarSpan>
                <StarSpan>&#x2605;</StarSpan>
                <StarSpan>&#x2605;</StarSpan>
            </Stars>
            <CardImg src={data.url}/>
            <CardPar data={data}/>
        </Card>
    )
}

export default ImgContainer;
