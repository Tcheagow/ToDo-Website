import React from "react";
import Button from "../button/Button";

import { ContainerCreateToDo } from './DivCreateToDoStyles';

export default function DivCreateToDo(){
    return(
        <ContainerCreateToDo className="divCreateToDo">
            <form className='searchForm'>
                <Button/>
                <input className='inputSearch' type="text" placeholder='Create a new To Do'
                />
            </form>
        </ContainerCreateToDo>
    );
}
