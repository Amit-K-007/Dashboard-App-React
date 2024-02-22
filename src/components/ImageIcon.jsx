import React from "react";
import { changeVisiblity } from "./Header";

function ImageIcon(props){
    let position = 0;

    function dragStart(event){
        event.dataTransfer.setData('Text',event.target.src);
        setTimeout(()=>{
            changeVisiblity();
        },500);
    }
    
    function drag(event){
        console.log(position);
        if(event.clientY > event.view.innerHeight-150 && position<=window.innerHeight-10){
            position = position + 10;
            window.scrollTo({
                top:position,
                behavior:'smooth'
            });
        }
        else if(event.clientY < 200 && position>=10){
            position = position-10;
            window.scrollTo({
                top:position,
                behavior:'smooth'
            });
        }
    }

    return(
        <div className="image-icon">
            <img src={props.src} alt="icon" id={props.id} onDragStart={dragStart} onDrag={drag} draggable={true}/>
        </div>
    );
}

export default ImageIcon;