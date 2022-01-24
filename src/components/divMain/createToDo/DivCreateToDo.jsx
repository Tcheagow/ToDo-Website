import React from "react";
import Button from "./button/Button";

import { ContainerCreateToDo, Forms, Input } from './DivCreateToDoStyles';

export default function DivCreateToDo(){
    return(
        <ContainerCreateToDo className="divCreateToDo">
            <Forms className='toDoInput'>
                <Button/>
                <Input className='inputSearch' type="text" placeholder='Create a new To Do'
                />
            </Forms>
        </ContainerCreateToDo>
    );
}
