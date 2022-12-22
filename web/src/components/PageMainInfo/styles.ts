import styled from "styled-components";

export const PageMainInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background-color: ${props => props.theme['brown-300']};
    border-radius: 0.5rem;
    padding: 0.75rem;

    div {
        text-align: center;
    }
    
    p > span {
        font-size: 0.75rem;
        padding-right: 0.25rem;
    }
`
export const Percent = styled.span`
    background-color: ${props => props.theme['brown-200']};
    border-radius: 99%;
    padding: 0.5rem;
`