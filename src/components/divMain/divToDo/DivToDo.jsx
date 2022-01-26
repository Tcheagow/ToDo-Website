import React from "react";
import DivFunctionalities from "./divFunctionalities/DivFunctionalities";

import { ContainerToDo, ContainerToDoList } from './DivToDoStyles';

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
                <ContainerToDoList className="borderDivTodo">
                    <p>{toDo}</p>
                </ContainerToDoList>
        );

        return toDoList;
    }

    return(
        <ContainerToDo className="backColor">
            {addToDoInList()}
            <DivFunctionalities/>
        </ContainerToDo>
    );
}