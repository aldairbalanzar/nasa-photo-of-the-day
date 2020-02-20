import React from 'react';

function ImgContainer (props) {
    return(
        <div>
            <h1>{props.data.date}</h1>
            <h2>{props.data.explanation}</h2>
            <img src={props.data.url}/>
            <p></p>
        </div>
    )
}

export default ImgContainer;
