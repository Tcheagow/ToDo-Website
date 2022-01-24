import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    .background{
        margin: 0;

        background-color: ${(props) => props.theme.color.background};
        
        background-image: url(${(props) => props.image});
        background-repeat: no-repeat;

        color: ${(props) => props.theme.color.text};
    }
    .iconSun{
        fill: ${(props) => props.theme.color.text};
    }
    .iconMoon{
        fill: ${(props) => props.theme.color.text};
    }
    .divCreateToDo{
        background-color: ${(props) => props.theme.color.colorInput};
    }
    .button{
        background-color: ${(props) => props.theme.color.colorInput};
        border-color:  ${(props) => props.theme.color.colorBorderButton};
    }
    .toDoInput{
        background-color: ${(props) => props.theme.color.colorInput};
    }
    .toDoInput input, .toDoInput input::placeholder{
        background-color: ${(props) => props.theme.color.colorInput};
        color: ${(props) => props.theme.color.text};
    }
`;