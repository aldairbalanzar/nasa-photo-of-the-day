import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    width: 50%;
    border: solid 8px transparent;
    border-radius: 20px;
    background-image: url(https://i.etsystatic.com/7666691/r/il/46231c/1971450361/il_794xN.1971450361_rkg0.jpg);
    background-size: contain;
    border-image: url(https://data.whicdn.com/images/220193202/original.jpg) 30 stretch;
`;

const HeaderContainer = styled.div `
    display: flex;
    width: 100%
    background-color: rgba(207,180,161,.3);
`;

const CardTitle = styled.h2 `
    width: 100%;
`;

const CardDate = styled.h2 `
    width: 100%;
`;

const CardImg = styled.img `
    object-fit: scale;
    width: 84%;
    border: solid 8px transparent;
    border-image: url(https://data.whicdn.com/images/220193202/original.jpg) 30 stretch;
`;

const CardPar = styled.p `
    width: 84%;
    background-color: rgba(207,180,161,.8);
    border-radius: 3px;
    padding: 1%;
`;

function ImgContainer ({data}) {
    return(
        <Card>
            <HeaderContainer>
            <CardTitle>{data.title}</CardTitle>
            <CardDate>{data.date}</CardDate>
            </HeaderContainer>
            <CardImg src={data.url}/>
            <CardPar>{data.explanation}</CardPar>
            <p></p>
        </Card>
    )
}

export default ImgContainer;
