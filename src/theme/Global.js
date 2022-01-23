import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin: 0;

        height: 100%;
        width: 100%;

        background-image: url(${(props) => props.image});
        background-repeat: no-repeat;
    }
    .background{
        background-color: ${(props) => props.theme.color.background};
        color:  ${(props) => props.theme.color.text};
    }
`;