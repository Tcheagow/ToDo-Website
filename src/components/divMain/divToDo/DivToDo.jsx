import React, { useState } from "react";
import DivFunctionalities from "./divFunctionalities/DivFunctionalities";
import DivToDoAll from "./Containers/DivToDoAll";
import DivToDoActive from "./Containers/DivToDoActive";
import DivToDoCompleted from "./Containers/DivToDoCompleted";

import { ContainerToDo} from './DivToDoStyles';

export default function DivCreateToDo(props){
    const [divToDo, setDivToDo] = useState("all");

    const showDivToDo = () => {
        if(divToDo === "all"){
            return <DivToDoAll updateToDo={props.updateToDo} setUpdateToDo={props.setUpdateToDo}/>
        }else if(divToDo === "active"){
            return <DivToDoActive updateToDo={props.updateToDo} setUpdateToDo={props.setUpdateToDo}/>
        }else{
            return <DivToDoCompleted updateToDo={props.updateToDo} setUpdateToDo={props.setUpdateToDo}/>
        }
    }

    return(
        <ContainerToDo className="backColor">
            {showDivToDo()}
            <DivFunctionalities divToDo={divToDo} setDivToDo={setDivToDo} 
                updateToDo={props.updateToDo} setUpdateToDo={props.setUpdateToDo}
            />
        </ContainerToDo>
    );
}