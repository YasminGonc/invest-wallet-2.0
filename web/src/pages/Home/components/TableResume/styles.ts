import styled from 'styled-components';

export const TableResumeContainer = styled.div`
    background-color: ${props => props.theme['brown-300']};
    border-radius: 0.5rem;
    color: ${props => props.theme.white};
    font-size: 1rem;

    margin: 0 1rem;
    padding: 0.75rem;

    h2 {
        font-size: 1rem; 
        margin-bottom: 0.5rem;
    }
`
export const ActivesTable = styled.table`
    border-collapse: collapse;
    text-align: center;

    td {
        background-color: ${props => props.theme['brown-200']};
        padding: 0.5rem;
    }
`