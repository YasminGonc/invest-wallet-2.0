import styled from 'styled-components';

export const GeneralInfoContainer = styled.section`
    display: flex;
    align-items: center;
    
    background-color: ${props => props.theme['green-100']};
    padding: 1rem 3rem;

    img {
        width: 5%;
        border-radius: 99%;
        margin-right: 3rem;
    }
`
export const InfosContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: ${props => props.theme.white};
    font-size: 1.25rem;

    span {
        font-size: 0.75rem;
        padding-right: 0.25rem;
    }
`
export const InfoTitle = styled.p`
    color: ${props => props.theme['brown-300']};
    font-weight: bold;
    font-size: 1rem;
`