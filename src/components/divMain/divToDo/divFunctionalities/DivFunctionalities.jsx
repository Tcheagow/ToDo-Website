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

    return(
        <ContainerFunctionalities>
            <p>{numberToDo()} itens left</p>
            <DivOptionShowToDo divToDo={props.divToDo} setDivToDo={props.setDivToDo}/>
            <p>Clear Completed</p>
        </ContainerFunctionalities>
    );
}