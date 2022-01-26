import React from "react";
import DivOptionShowToDo from "./showToDo/DivOptionShowToDo";

import { ContainerFunctionalities } from './DivFunctionalitiesStyles';

export default function DivFunctionalities(){
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
            <DivOptionShowToDo/>
            <p>Clear Completed</p>
        </ContainerFunctionalities>
    );
}