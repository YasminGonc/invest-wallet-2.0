import { ProfitLossHighlightContainer } from "./styles";

interface ProfitLossHighlightProps {
    variant: 'profit' | 'loss';
    value: number;
}

export function ProfitLossHighlight({variant, value}: ProfitLossHighlightProps) {
    return (
        <ProfitLossHighlightContainer variant={variant}>
            {value}%
        </ProfitLossHighlightContainer>
    )
}