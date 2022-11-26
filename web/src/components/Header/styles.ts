import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme['brown-300']};
    padding: 1rem 2rem;

    img {
        width: 8%;
    }
`
export const Button = styled.button`
    background-color: ${props => props.theme['green-100']};
    border: none;
    border-radius: 0.5rem;
    color: ${props => props.theme.white};
    cursor: pointer;
    padding: 0.75rem 2rem;

    &:hover {
        background-color: ${props => props.theme['green-200']};
    }
`