import styled from 'styled-components';

export const ContainerFunctionalities = styled.div`
    height: 7vh;
    width: calc(40vw - 40px);

    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-left: 20px;

    p{
        cursor: pointer;
    }

    @media(max-width: 1000px) {
        width: calc(60vw - 40px);
    }
    @media(max-width: 700px) {
        width: calc(80vw - 40px);
    }
`;