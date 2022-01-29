import React, { useState } from "react";
import Header from './header/Header'
import DivCreateToDo from "./createToDo/DivCreateToDo";
import DivToDo from './divToDo/DivToDo';

import { ContainerMain } from './DivMainStyles';

export default function DivMain(props){
    const [updateToDo, setUpdateToDo] = useState(false);

    return(
        <ContainerMain>
            <Header light={props.light} setLight={props.setLight}/>
            <DivCreateToDo toDo={props.toDo} setToDo={props.setToDo} 
                updateToDo={updateToDo} setUpdateToDo={setUpdateToDo}
            />
            <DivToDo toDo={props.toDo} setToDo={props.setToDo}
                updateToDo={updateToDo} setUpdateToDo={setUpdateToDo}
            />
        </ContainerMain>
    );
}