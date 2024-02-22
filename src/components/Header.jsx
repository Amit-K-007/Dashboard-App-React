import React,{useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import IconContainer from "./IconContainer";

let changeVisiblity;
function Header() {
  const [visible,setVisible] = useState(false);

  changeVisiblity = function (){
    setVisible((prevValue)=>{
      return !prevValue;
    });
  }

  return (
    <header className="header">
      <span>Dashboard</span>
      <div className="header-right">  
        <IconButton aria-label="menu" onClick={changeVisiblity}>
          <MenuIcon fontSize="large" style={{ color: "#15F5BA" }} />
        </IconButton>
        <IconContainer active={visible}/>
      </div>
    </header>
  );
}

export default Header;
export {changeVisiblity};
