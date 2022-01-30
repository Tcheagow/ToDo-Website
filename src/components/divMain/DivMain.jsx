import React, { useState } from "react";
import Header from './header/Header'
import DivCreateToDo from "./createToDo/DivCreateToDo";
import DivToDo from './divToDo/DivToDo';
import DivOptionShowToDo from "./divToDo/divFunctionalities/showToDo/DivOptionShowToDo";

import { ContainerMain, ContainerFunctionalities } from './DivMainStyles';

export default function DivMain(props){
    const [updateToDo, setUpdateToDo] = useState(false);
    const [divToDo, setDivToDo] = useState("all");

    const renderFunctionalities = () => {
        if(window.screen.width < 500){
            return (
                <ContainerFunctionalities className="backColor">
                    <DivOptionShowToDo divToDo={divToDo} setDivToDo={setDivToDo}/>
                </ContainerFunctionalities>
            );
        }
    };

    return(
        <ContainerMain>
            <Header light={props.light} setLight={props.setLight}/>
            <DivCreateToDo toDo={props.toDo} setToDo={props.setToDo} 
                updateToDo={updateToDo} setUpdateToDo={setUpdateToDo}
            />
            <DivToDo divToDo={divToDo} setDivToDo={setDivToDo}
                updateToDo={updateToDo} setUpdateToDo={setUpdateToDo}
            />
            {renderFunctionalities()}
        </ContainerMain>
    );
}