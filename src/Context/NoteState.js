import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  

  const[secondData,setSecondData]=useState({title:"", summary:"",runtime:"",language:"",img:"",url:"",premiered:""});
  
  return (
    <NoteContext.Provider value={{ secondData, setSecondData }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;