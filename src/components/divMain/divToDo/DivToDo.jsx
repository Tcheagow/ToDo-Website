import React from "react";
import DivFunctionalities from "./divFunctionalities/DivFunctionalities";

import { ContainerToDo } from './DivToDoStyles';

export default function DivCreateToDo(props){
    function addToDoInList() {
        let toDoArray = [];

        for(let i = 0; i < 10; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(localStorage.getItem(toDoInLocalStorage) !== null){
                toDoArray[i] = localStorage.getItem(toDoInLocalStorage);
            }else{
                i = 10;
            }
        }

        const toDoList = toDoArray.map(
            (toDo) => 
                <p>{toDo}</p>
        );

        return toDoList;
    }

    return(
        <ContainerToDo className="backColor">
            <DivFunctionalities/>
            {addToDoInList()}
        </ContainerToDo>
    );
}