import React from "react";
import Sun from './Sun';
import Moon from './Moon';

import { DivHeader } from './HeaderStyles';

export default function Header(props){
    const icon = () => {
        if(props.light){
            return <Moon/>
        }else{
            return <Sun/>
        }
    };

    return(
        <DivHeader>
            <h1>T O D O</h1>
            <>{icon()}</>
        </DivHeader>
    );
}