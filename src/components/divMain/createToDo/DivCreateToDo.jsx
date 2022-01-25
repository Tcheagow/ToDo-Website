import React from "react";
import Button from "./button/Button";

import { ContainerCreateToDo, Forms, Input } from './DivCreateToDoStyles';

export default function DivCreateToDo(props){
    function NewToDo(e){
        e.preventDefault();

        if(props.toDo !== ""){
            for(let i = 0; i < 10; i++){
                const positionLocalStorage = "toDo" + i;

                if(localStorage.getItem(positionLocalStorage) === null){
                    localStorage.setItem(positionLocalStorage, props.toDo);
                    i = 10;
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
