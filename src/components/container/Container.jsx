import React from "react";
import DivMain from "../divMain/DivMain";

import { DivContainer } from './ContainerStyles';

export default function Container(props){
    return(
        <DivContainer className="background">
            <DivMain light={props.light} setLight={props.setLight} toDo={props.toDo} setToDo={props.setToDo}/>
        </DivContainer>
    );
}