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
`;