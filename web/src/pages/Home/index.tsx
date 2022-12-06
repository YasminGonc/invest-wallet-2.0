import { DivisionRechart } from './components/DivisionRechart';
import { EquityGrowthRechart } from './components/EquityGrowthRechart';
import { IncomeRechart } from './components/IncomeRechart';
import { Resume } from './components/Resume';
import { TableResume } from './components/TableResume';

import { FlexHomeContainer, HomeContainer } from './styles';

export function Home() {
    return(
        <HomeContainer>
            <Resume />

            <FlexHomeContainer>
                <EquityGrowthRechart />
                <IncomeRechart />
                <DivisionRechart />
                <TableResume />
            </FlexHomeContainer>
        </HomeContainer>
    )
}