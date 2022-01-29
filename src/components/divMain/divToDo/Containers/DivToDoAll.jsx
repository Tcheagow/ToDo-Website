import React, { useState, useEffect } from "react";


import { ContainerToDoList, DivCheckboxAndSpan } from './DivShowToDoStyles';

export default function DivToDoAll(props){
    const [toDoAll, setToDoAll] = useState("");

    function toDoChecked(todo){    
        for(let i = 0; i < 10; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(localStorage.getItem(toDoInLocalStorage) !== null && todo === localStorage.getItem(toDoInLocalStorage).split("|")[0]) {
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

            if(localStorage.getItem(toDoInLocalStorage) !== null && todo === localStorage.getItem(toDoInLocalStorage)) {
               if(localStorage.getItem(i) === "false"){
                    localStorage.setItem(i, "true");
               }else{
                    localStorage.setItem(i, "false");
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
                        <DivCheckboxAndSpan>
                            <input type="checkbox" className="borderCheckBox" checked={toDoChecked(toDo)}
                                onChange={()=>changeChecked(toDo)}
                            />
                            <span className="colorAndBorderCheckbox"></span>
                        </DivCheckboxAndSpan>
                        <p>{toDo}</p>
                    </div>
                </ContainerToDoList>
        ); 
        setToDoAll(toDoList);
    }, [props.updateToDo])

    return(
        <>{toDoAll}</>
    );
}