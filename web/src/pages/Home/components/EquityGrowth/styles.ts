import styled from 'styled-components';

export const EquityGrowthContainer = styled.div`
    background-color: ${props => props.theme['brown-300']};
    border-radius: 0.5rem;
    color: ${props => props.theme.white};
    font-size: 1rem;

    padding: 0.75rem;

    h2 {
        font-size: 1rem; 
        margin-bottom: 1rem;
    }
`