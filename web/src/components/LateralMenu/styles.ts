import styled from 'styled-components';

export const LateralMenuContainer = styled.aside`
    background-color: ${props => props.theme['brown-300']};

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PageButton = styled.div`
    width: 10rem;
    height: 4.9rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${props => props.theme['green-100']};
    }
`