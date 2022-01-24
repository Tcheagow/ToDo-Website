import React from "react";
import Header from './header/Header'
import DivCreateToDo from "./createToDo/DivCreateToDo";

import { ContainerMain } from './DivMainStyles';

export default function DivMain(props){
    return(
        <ContainerMain>
            <Header light={props.light} setLight={props.setLight}/>
            <DivCreateToDo />
        </ContainerMain>
    );
}