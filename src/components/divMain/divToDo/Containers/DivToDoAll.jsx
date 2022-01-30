import React, { useState, useEffect } from "react";
import CheckIcon from '../../../images/icon-check.svg';

import { ContainerToDoList, DivCheckboxAndSpan } from './DivShowToDoStyles';

export default function DivToDoAll(props){
    const [toDoAll, setToDoAll] = useState("");

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

    function dashedToDo(todo){
        for(let i = 0; i < 10; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(todo === localStorage.getItem(toDoInLocalStorage)) {
               if(localStorage.getItem(i) === "false"){
                    return todo
               }else{
                    return <s className="dashedTodo">{todo}</s>
               }
            }
        }
    }

    useEffect( () => {
        function addToDoInList() {
            let toDoArray = [];
    
            for(let i = 0; i < 10; i++){
                let toDoInLocalStorage = "toDo" + i;
    
                if(localStorage.getItem(toDoInLocalStorage) !== null){
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
                        <p>{dashedToDo(toDo)}</p>
                    </div>
                </ContainerToDoList>
        ); 
        setToDoAll(toDoList);
    }, [props.updateToDo])

    return(
        <>{toDoAll}</>
    );
}