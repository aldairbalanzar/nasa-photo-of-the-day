import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
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
  return (
    <div className="App">
      <h2>Today's photo:</h2>
      <ImgContainer data={data} />
    </div>
  );
}

export default App;
