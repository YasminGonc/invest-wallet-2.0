import styled from 'styled-components';

export interface ProfitLossHighlightProps {
    variant: 'profit' | 'loss';
}

export const ProfitLossHighlightContainer = styled.span<ProfitLossHighlightProps>`
    color: ${props => props.variant === 'profit' ? props.theme.profit : props.theme.loss};
`