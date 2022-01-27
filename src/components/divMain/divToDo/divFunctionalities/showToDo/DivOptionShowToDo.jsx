import React from "react";

import { ContainerOptionShowToDo } from './DivOptionShowToDoStyles';

export default function DivOptionShowToDo(props){
    const colors = {
        colorAll: () => {
            if(props.divToDo === "all"){
                return true;
            }else{ 
                return false;
            }
        },
        colorActive: () => {
            if(props.divToDo === "active"){
                return true;
            }else{ 
                return false;
            }
        },
        colorCompleted: () => {
            if(props.divToDo === "completed"){
                return true;
            }else{ 
                return false;
            }
        }
    }

    return(
        <ContainerOptionShowToDo>
            <p style={colors.colorAll() ? {color:"blue"} : null}
                onClick={() => props.setDivToDo("all")}
            >All
            </p>
            <p style={colors.colorActive() ? {color:"blue"} : null}
                onClick={() => props.setDivToDo("active")}
             >Active
             </p>
            <p style={colors.colorCompleted() ? {color:"blue"} : null}
                onClick={() => props.setDivToDo("completed")}
             >Completed
             </p>
        </ContainerOptionShowToDo>
    );
}