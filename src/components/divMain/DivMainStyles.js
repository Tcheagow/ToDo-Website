import styled from 'styled-components';

export const ContainerMain = styled.div`
    height: min-content;
    width: 40vw;

    display: flex;
    flex-direction: column;

    margin-top: 40px;

    @media(max-width: 1000px) {
        width: 60vw;
    }
    @media(max-width: 700px) {
        width: 80vw;
    }
`;

export const ContainerFunctionalities = styled.div`
    height: 7vh;
    width: auto;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-top: 20px;

    border-radius: 10px 0 10px 0;
`;