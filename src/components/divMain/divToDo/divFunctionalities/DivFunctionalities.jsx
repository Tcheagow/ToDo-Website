import React from "react";
import DivOptionShowToDo from "./showToDo/DivOptionShowToDo";

import { ContainerFunctionalities } from './DivFunctionalitiesStyles';

export default function DivFunctionalities(props){
    const numberToDo =() => {
        if(isNaN(parseInt(localStorage.getItem("contador")))){
            return 0
        }else{
            return parseInt(localStorage.getItem("contador"));
        }
    } 

    function ClearToDo(){    
        for(let i = 0; i < 10; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(localStorage.getItem(i) === "true"){
                localStorage.removeItem(toDoInLocalStorage);
                localStorage.removeItem(i);

                props.setUpdateToDo(!props.updateToDo)
            }
        }
    }

    return(
        <ContainerFunctionalities>
            <p>{numberToDo()} itens left</p>
            <DivOptionShowToDo divToDo={props.divToDo} setDivToDo={props.setDivToDo}/>
            <p onClick={ClearToDo}>Clear Completed</p>
        </ContainerFunctionalities>
    );
}