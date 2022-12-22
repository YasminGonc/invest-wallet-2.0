import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LateralMenuContainer = styled.nav`
    background-color: ${props => props.theme['brown-300']};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    max-height: 80vh;
`
export const PageButton = styled(NavLink)`
    width: 10rem;
    height: 5.05rem;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.black};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${props => props.theme['green-100']};
    }

    &.active {
        background-color: ${props => props.theme['green-100']};
    }
`