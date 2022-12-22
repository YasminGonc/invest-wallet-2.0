import styled from 'styled-components';

export const StocksContainer = styled.main`
    padding: 2rem;
    max-height: 76vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme['brown-200']};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme['brown-100']};
    } 

    color: ${props => props.theme.white};
`
export const ResumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
`
export const StocksTable = styled.table`   
    width: 100%;

    border-collapse: separate;
    border-spacing: 0 0.5rem;
    text-align: center;
    
    td {
        background-color: ${props => props.theme['brown-200']};
        padding: 0.5rem;

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }

    tbody {
        tr {
            cursor: pointer;
        }
    }
`
interface ProfitLossHighlightProps {
    variant: 'profit' | 'loss'
}

export const ProfitLossHighlight = styled.span<ProfitLossHighlightProps>`
    color: ${props => props.variant === 'profit' ? props.theme.profit : props.theme.loss};
`