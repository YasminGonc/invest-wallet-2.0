import styled from 'styled-components';

export const GeneralInfoContainer = styled.section`
    display: flex;
    align-items: center;
    
    background-color: ${props => props.theme['green-100']};

    img {
        width: 5%;
        border-radius: 99%;
    }
`