import React, {useState} from "react";

import { ContainerOptionShowToDo } from './DivOptionShowToDoStyles';

export default function DivOptionShowToDo(){
    const [color, setColor] = useState("all");

    const colors = {
        colorAll: () => {
            if(color === "all"){
                return true;
            }else{ 
                return false;
            }
        },
        colorActive: () => {
            if(color === "active"){
                return true;
            }else{ 
                return false;
            }
        },
        colorCompleted: () => {
            if(color === "completed"){
                return true;
            }else{ 
                return false;
            }
        }
    }

    return(
        <ContainerOptionShowToDo>
            <p style={colors.colorAll() ? {color:"blue"} : null}
                onClick={() => setColor("all")}
            >All
            </p>
            <p style={colors.colorActive() ? {color:"blue"} : null}
                onClick={() => setColor("active")}
             >Active
             </p>
            <p style={colors.colorCompleted() ? {color:"blue"} : null}
                onClick={() => setColor("completed")}
             >Completed
             </p>
        </ContainerOptionShowToDo>
    );
}