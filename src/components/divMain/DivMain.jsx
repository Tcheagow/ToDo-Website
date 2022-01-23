import React from "react";
import Header from '../Header/Header'

import { ContainerMain } from './DivMainStyles';

export default function DivMain(props){
    return(
        <ContainerMain>
            <Header light={props.light} setLight={props.setLight}/>
        </ContainerMain>
    );
}