import { Resume } from './components/Resume';
import { TableResume } from './components/TableResume';

import { HomeContainer } from './styles';

export function Home() {
    return(
        <HomeContainer>
            <Resume />
            <TableResume />
        </HomeContainer>
    )
}