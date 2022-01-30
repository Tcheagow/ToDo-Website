import styled from 'styled-components';

export const ContainerToDoList = styled.div`
    width: auto;
    height: 7vh;


    display: flex;
    flex-direction: row;

    align-items: center;

    overflow-x: hidden;
`;

export const ContainerInputAndToDoAndSvg = styled.div`
    width: calc(40vw - 40px);
    margin-left: 20px;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1000px) {
        width: calc(60vw - 40px);
    }
    @media(max-width: 700px) {
        width: calc(80vw - 40px);
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
`;

export const DivToDoAndImage = styled.div`
    width: calc(40vw - 80px );

    display: flex;
    flex-direction: row;

    justify-content: space-between;

    @media(max-width: 1000px) {
        width: calc(60vw - 80px);
    }
    @media(max-width: 700px) {
        width: calc(80vw - 80px);
    }
`;