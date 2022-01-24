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
    .test{
        background-color: ${(props) => props.theme.color.background};
    }
`;