import React, { useState, useEffect } from "react";
import CheckIcon from '../../../images/icon-check.svg';
import CrossIcon from '../../../images/icon-cross.svg';

import { ContainerToDoList, DivCheckboxAndSpan, ContainerInputAndToDoAndSvg, DivToDoAndImage } from './DivShowToDoStyles';

export default function DivToDoActive(props){
    const [toDoActive, setToDoActive] = useState("");

    function toDoChecked(todo){    
        for(let i = 0; i < 50; i++){
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
        for(let i = 0; i < 50; i++){
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

    function deleteToDo(todo){
        for(let i = 0; i < 50; i++){
            let toDoInLocalStorage = "toDo" + i;

            if(localStorage.getItem(toDoInLocalStorage) === todo){
                localStorage.removeItem(toDoInLocalStorage);
                localStorage.removeItem(i);

                const contToDo = parseInt(localStorage.getItem("contador"));
                const valueConstToDo = contToDo - 1;
                
                localStorage.setItem("contador", valueConstToDo.toString());
                
                props.setUpdateToDo(!props.updateToDo);
            }
        }
    }

    useEffect( () => {
        function addToDoInList() {
            let toDoArray = [];
    
            for(let i = 0; i < 50; i++){
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
                    <ContainerInputAndToDoAndSvg>
                        <DivCheckboxAndSpan checkicon={CheckIcon}>
                            <input type="checkbox" className="borderCheckBox" checked={toDoChecked(toDo)}
                                onChange={()=>changeChecked(toDo)}
                            />
                            <span className="colorAndBorderCheckbox"></span>
                        </DivCheckboxAndSpan>
                        <DivToDoAndImage>
                            <p>{toDo}</p>
                            <div onClick={() => deleteToDo(toDo)}>
                                <img src={CrossIcon} alt="svg X" />
                            </div>
                        </DivToDoAndImage>
                    </ContainerInputAndToDoAndSvg>
                </ContainerToDoList>
        ); 
        setToDoActive(toDoList);
    }, [props.updateToDo])

    return(
        <>{toDoActive}</>
    );
}