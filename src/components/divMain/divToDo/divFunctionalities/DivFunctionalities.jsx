import React from "react";
import DivOptionShowToDo from "./showToDo/DivOptionShowToDo";

import { ContainerFunctionalities } from './DivFunctionalitiesStyles';

export default function DivFunctionalities(){
  
    return(
        <ContainerFunctionalities>
            <p>itens left</p>
            <DivOptionShowToDo/>
            <p>Clear Completed</p>
        </ContainerFunctionalities>
    );
}