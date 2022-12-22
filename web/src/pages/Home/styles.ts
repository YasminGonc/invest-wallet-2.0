import styled from 'styled-components';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;

    padding: 2rem;
    width: 100%;
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
`
export const FlexHomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`