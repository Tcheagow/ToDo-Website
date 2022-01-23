import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin: 0;
    }
    .background{
        margin: 0;

        background-color: ${(props) => props.theme.color.background};
        
        background-image: url(${(props) => props.image});
        background-repeat: no-repeat;
    }
    
`;