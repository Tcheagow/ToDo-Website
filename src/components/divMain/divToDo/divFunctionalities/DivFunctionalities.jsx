import React from "react";
import DivOptionShowToDo from "./showToDo/DivOptionShowToDo";

import { ContainerFunctionalities } from './DivFunctionalitiesStyles';

export default function DivFunctionalities(props){
    const numberToDo = () => {
        if(isNaN(parseInt(localStorage.getItem("contador")))){
            return 0
        }else{
            return parseInt(localStorage.getItem("contador"));
        }
    } 

    function ClearToDo(){    
        for(let i = 0; i < 50; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(localStorage.getItem(i) === "true"){
                localStorage.removeItem(toDoInLocalStorage);
                localStorage.removeItem(i);

                props.setUpdateToDo(!props.updateToDo)
            }
        }
    }

    function renderFunctionalities() {
        if(window.screen.width > 500){
            return (
                <>
                    <p>{numberToDo()} itens left</p>
                    <DivOptionShowToDo divToDo={props.divToDo} setDivToDo={props.setDivToDo}/>
                    <p onClick={ClearToDo}>Clear Completed</p>
                </>
            );
        }else{
            return(
                <>
                    <p>{numberToDo()} itens left</p>
                    <p onClick={ClearToDo}>Clear Completed</p>
                </>
            );
        }
    }
    return(
        <ContainerFunctionalities>
            {renderFunctionalities()}
        </ContainerFunctionalities>
    );
}