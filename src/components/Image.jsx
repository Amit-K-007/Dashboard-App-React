import React from "react";

function Image(props){
    let position = 0;

    function dragStart(event){
        event.dataTransfer.setData('Text',event.target.id);
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
        else if(event.clientY < 150 && position>=10){
            position = position-10;
            window.scrollTo({
                top:position,
                behavior:'smooth'
            });
        }
    }

    function drop(event){
        event.preventDefault();
        event.dataTransfer.clearData();
        const source = event.target.src;
        const data = event.dataTransfer.getData("Text");
        const currImage = event.target;
    
        if(data.includes("img")){
            const prevImage = document.getElementById(data);
            currImage.src = prevImage.src;
            prevImage.src = source;
        }
        else{
            event.target.src = data;
        }

        const images = document.querySelectorAll(".img-container img");
        const sourceArray = [];
        images.forEach((image)=>{
            sourceArray.push(image.src);
        });
        localStorage.setItem("ImageSource",sourceArray.join(','));
    }

    function allowDrop(event){
        event.preventDefault();
    }

    return (
        <div onDrop={drop} onDragOver={allowDrop}>
            <img src={props.src} alt="option" onDrag={drag} onDragStart={dragStart} draggable={true} id={props.id} />
        </div>
    );
}
export default Image;