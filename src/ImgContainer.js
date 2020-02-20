import React from 'react';
import CardHeader from './CardHeader';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    width: 50%;
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

const CardPar = styled.p `
    width: 84%;
    background-color: rgba(207,180,161,.7);
    border-radius: 2px;
    padding: 1%;
`;

function ImgContainer ({data}) {
    return(
        <Card>
            <CardHeader data={data}/>
            <Star> &#x2605; &#x2605; &#x2605; &#x2605;  &#x2605; &#x2605;</Star>
            <CardImg src={data.url}/>
            <CardPar>{data.explanation}</CardPar>
            <p></p>
        </Card>
    )
}

export default ImgContainer;
