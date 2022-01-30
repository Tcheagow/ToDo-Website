import styled from 'styled-components';

export const ContainerCreateToDo = styled.div`
    display: flex;

    justify-content: flex-start;
    align-items: center;

    width: auto;
    height: 10vh;

    margin-top: 20px;

    border-radius: 0 10px 0 10px;
`;

export const Forms = styled.form`
    width: calc(40vw - 40px);
    
    margin-left: 20px;

    
    @media(max-width: 1000px) {
        width: calc(60vw - 40px);
    }
`;

export const Input = styled.input`
    width: calc(40vw - 80px);

    margin-left: 20px;

    border: 0;

    transform: translateY(-20%);

    @media(max-width: 1000px) {
        width: calc(60vw - 80px);
    }
`;