import React from "react";

import { ContainerToDo } from './DivToDoStyles';

export default function DivCreateToDo(props){
    function addToDoInList() {
        if(localStorage.getItem("todo1") !== null){
            return <p>{localStorage.getItem("todo1")}</p>;
        }else{
            return <p></p>
        }
    }

    return(
        <ContainerToDo className="backColor">
            {addToDoInList()}
        </ContainerToDo>
    );
}