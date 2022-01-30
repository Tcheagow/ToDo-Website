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
`;