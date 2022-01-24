import React from "react";
import Button from "./button/Button";

import { ContainerCreateToDo, Forms, Input } from './DivCreateToDoStyles';

export default function DivCreateToDo(props){
    function NewToDo(e){
        e.preventDefault();
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
