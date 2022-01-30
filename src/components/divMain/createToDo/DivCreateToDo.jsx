import React from "react";
import Button from "./button/Button";

import { ContainerCreateToDo, Forms, Input } from './DivCreateToDoStyles';

export default function DivCreateToDo(props){
    function NewToDo(e){
        e.preventDefault();

        if(props.toDo !== ""){
            for(let i = 0; i < 50; i++){
                const positionLocalStorage = "toDo" + i;

                if(localStorage.getItem(positionLocalStorage) === null){
                    const todo = props.toDo;
                    localStorage.setItem(positionLocalStorage, todo);
                    localStorage.setItem(i, "false");
                    
                    props.setUpdateToDo(!props.updateToDo)
                    i = 50;

                    if(localStorage.getItem("contador") !== null){
                        const contToDo = parseInt(localStorage.getItem("contador"));
                        const valueConstToDo = contToDo + 1;
                        
                        localStorage.setItem("contador", valueConstToDo.toString())
                    }else{
                        localStorage.setItem("contador", "1");
                    }
                }
            }
        }
        props.setToDo("");
    }

    return(
        <ContainerCreateToDo className="backColor" onSubmit={NewToDo}>
            <Forms className='toDoInput'>
                <Button/>
                <Input className='inputSearch' value={props.toDo} type="text" placeholder='Create a new To Do'
                    onChange={(e) => props.setToDo(e.target.value)}
               />
            </Forms>
        </ContainerCreateToDo>
    );
}