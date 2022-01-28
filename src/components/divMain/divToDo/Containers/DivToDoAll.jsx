import React from "react";


import { ContainerToDoList, DivCheckboxAndSpan } from './DivToDoStyles';

export default function DivToDoAll(props){
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
            (toDo, i) => 
                <ContainerToDoList className="borderDivTodo" key={i}>
                    <div>
                        <DivCheckboxAndSpan>
                            <input type="checkbox" className="borderCheckBox"/>
                            <span className="colorAndBorderCheckbox"></span>
                        </DivCheckboxAndSpan>
                        <p>{toDo} - {i}</p>
                    </div>
                </ContainerToDoList>
        );

        return toDoList;
    }

    return(
        <>{addToDoInList()}</>
    );
}