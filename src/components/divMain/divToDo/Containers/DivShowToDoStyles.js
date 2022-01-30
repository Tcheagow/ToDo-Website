import styled from 'styled-components';

export const ContainerToDoList = styled.div`
    width: auto;
    height: 7vh;


    display: flex;
    flex-direction: row;

    align-items: center;

    div{
        width: calc(35vw - 40px);
        margin-left: 20px;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: flex-start;
    }
`;

export const DivCheckboxAndSpan =  styled.label`
    input {
        display: none;
    }

    span {
        width: 20px;
        height: 20px;

        margin-right: 20px;

        display: block;

        border-radius: 50px;
    }

    input:checked + span {
        background: url(${(props) => props.checkicon}), linear-gradient(to right,hsl(192, 100%, 67%) , hsl(280, 87%, 65%));
        background-repeat: no-repeat;
        background-position: center;
    }

`