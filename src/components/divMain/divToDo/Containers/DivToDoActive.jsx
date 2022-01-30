import React, { useState, useEffect } from "react";
import CheckIcon from '../../../images/icon-check.svg';

import { ContainerToDoList, DivCheckboxAndSpan } from './DivShowToDoStyles';

export default function DivToDoActive(props){
    const [toDoActive, setToDoActive] = useState("");

    function toDoChecked(todo){    
        for(let i = 0; i < 10; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(todo === localStorage.getItem(toDoInLocalStorage)) {
               if(localStorage.getItem(i) === "false"){
                    return false;
               }else{
                   return true;
               }
            }
        }
    }

    function changeChecked(todo){
        for(let i = 0; i < 10; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(todo === localStorage.getItem(toDoInLocalStorage)) {
               if(localStorage.getItem(i) === "false"){
                    localStorage.setItem(i, "true");

                    const contToDo = parseInt(localStorage.getItem("contador"));
                    const valueConstToDo = contToDo - 1;
                    
                    localStorage.setItem("contador", valueConstToDo.toString());
               }else{
                    localStorage.setItem(i, "false");

                    const contToDo = parseInt(localStorage.getItem("contador"));
                    const valueConstToDo = contToDo + 1;
                    
                    localStorage.setItem("contador", valueConstToDo.toString());
               }
               props.setUpdateToDo(!props.updateToDo);
            }
        }
    }

    useEffect( () => {
        function addToDoInList() {
            let toDoArray = [];
    
            for(let i = 0; i < 10; i++){
                let toDoInLocalStorage = "toDo" + i;
    
                if(localStorage.getItem(toDoInLocalStorage) !== null && localStorage.getItem(i) === "false"){
                    toDoArray[i] = localStorage.getItem(toDoInLocalStorage);
                }
            }
            return toDoArray;
        }
        const toDoList = addToDoInList().map(
            (toDo, index) => 
                <ContainerToDoList className="borderDivTodo" key={index}>
                    <div>
                        <DivCheckboxAndSpan checkicon={CheckIcon}>
                            <input type="checkbox" className="borderCheckBox" checked={toDoChecked(toDo)}
                                onChange={()=>changeChecked(toDo)}
                            />
                            <span className="colorAndBorderCheckbox"></span>
                        </DivCheckboxAndSpan>
                        <p>{toDo}</p>
                    </div>
                </ContainerToDoList>
        ); 
        setToDoActive(toDoList);
    }, [props.updateToDo])

    return(
        <>{toDoActive}</>
    );
}