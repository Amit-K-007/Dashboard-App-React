import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

ReactDom.render(<App />,document.getElementById("root"));

let imageSources = localStorage.getItem("ImageSource");
imageSources = imageSources.split(',');
if(imageSources){
    const images = document.querySelectorAll(".img-container img");
    images.forEach((image,index)=>{
        image.src = imageSources[index];
    });
}