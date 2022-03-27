import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => props.theme.color.background};
        overflow-x: hidden;
    }
    .background{
        margin: 0;

        background-color: ${(props) => props.theme.color.background};
        
        background-image: url(${(props) => props.image});
        background-repeat: no-repeat;
        background-size: cover;
        
        color: ${(props) => props.theme.color.text};
    }
    .iconSun{
        fill: ${(props) => props.theme.color.text};
    }
    .iconMoon{
        fill: ${(props) => props.theme.color.text};
    }
    .backColor{
        background-color: ${(props) => props.theme.color.backgroundDivInMain};
    }
    .button{
        background-color: ${(props) => props.theme.color.backgroundDivInMain};
        border: 1.5px solid ${(props) => props.theme.color.colorBorderButton};
    }
    .toDoInput{
        background-color: ${(props) => props.theme.color.colorInput};
    }
    .toDoInput input, .toDoInput input::placeholder{
        background-color: ${(props) => props.theme.color.colorInput};
        color: ${(props) => props.theme.color.text};
    }
    .borderDivTodo{
        border-bottom:  ${(props) => props.theme.color.borderDivToDo};
    }
    .colorAndBorderCheckbox{
        background-color: ${(props) => props.theme.color.backgroundDivInMain};
        border: 1.5px solid ${(props) => props.theme.color.colorBorderButton};
    }
    .dashedTodo{
        color: ${(props) => props.theme.color.colorDashedToDo};
    }
`;