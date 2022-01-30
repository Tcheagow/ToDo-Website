import styled from 'styled-components';

export const ContainerOptionShowToDo = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;

    width: 15vw;

    p{
        cursor: pointer;
    }
    
    @media(max-width: 1000px) {
        width: 25vw;
    }
    @media(max-width: 700px) {
        width: 30vw;
    }
    @media(max-width: 500px) {
        width: 40vw;
    }
    @media(max-width: 400px) {
        width: 60vw;
    }
`;