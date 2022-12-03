import { EquityGrowth } from './components/EquityGrowth';
import { Income } from './components/Income';
import { Resume } from './components/Resume';
import { TableResume } from './components/TableResume';

import { FlexHomeContainer, HomeContainer } from './styles';

export function Home() {
    return(
        <HomeContainer>
            <Resume />

            <FlexHomeContainer>
                <TableResume />
                <EquityGrowth />
                <Income />
            </FlexHomeContainer>
        </HomeContainer>
    )
}