import React, { useState, useEffect } from "react";


import { ContainerToDoList, DivCheckboxAndSpan } from './DivToDoStyles';

export default function DivToDoAll(props){
   const [toDoAll, setToDoAll] = useState("");

    useEffect( () => {
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
            return toDoArray;
        }
        const toDoList = addToDoInList().map(
            (toDo, index) => 
                <ContainerToDoList className="borderDivTodo" key={index}>
                    <div>
                        <DivCheckboxAndSpan>
                            <input type="checkbox" className="borderCheckBox"/>
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