import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components';
import ImgContainer from "./ImgContainer";

function App() {

  const [data, setData] = useState([]);

    useEffect(() => {
        const nasaAPI = `https://api.nasa.gov/planetary/apod?api_key=rIlhYhhKIB93els3Uf63kgyyp8FsjjPCLVOVnxlg&date`;
        axios.get(nasaAPI)
        .then(res => {
            console.log("here is today's image, ma dude.", res.data);
            setData(res.data);
        })
        .catch(err => {
            console.log("no picture to catch...", err);
        })
    }, []);

    const AppContainer = styled.div `
      max-width: 1300px;
      width 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `;

    const AppTitle = styled.h2 `
      width: 100%;
    `;

  return (
    <AppContainer className="App">
      <AppTitle>Today's photo:</AppTitle>
      <ImgContainer data={data} />
    </AppContainer>
  );
}

export default App;
