import React from "react";
import Image from "./Image";

function ImageContainer(){
    return (
        <div className="img-container">
            <Image id={"img1"} src="images/001.png" />
            <Image id={"img2"} src="images/002.png" />
            <Image id={"img3"} src="images/003.png" />
            <Image id={"img4"} src="images/004.png" />
            <Image id={"img5"} src="images/005.png" />
            <Image id={"img6"} src="images/006.png" />
            <Image id={"img7"} src="images/007.png" />
            <Image id={"img8"} src="images/008.png" />
        </div>
    );
}

export default ImageContainer;