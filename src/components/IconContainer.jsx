import React from "react";
import ImageIcon from "./ImageIcon";

function IconContainer(props){
    

    return (
        <div className="icon-container" style={{display: props.active ? "grid" : "none"}}>
            <ImageIcon id={"icon1"} src="images/001.png" />
            <ImageIcon id={"icon2"} src="images/002.png" />
            <ImageIcon id={"icon3"} src="images/003.png" />
            <ImageIcon id={"icon4"} src="images/004.png" />
            <ImageIcon id={"icon5"} src="images/005.png" />
            <ImageIcon id={"icon6"} src="images/006.png" />
            <ImageIcon id={"icon7"} src="images/007.png" />
            <ImageIcon id={"icon8"} src="images/008.png" />
        </div>
    );
}

export default IconContainer;