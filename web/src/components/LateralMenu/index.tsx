import { LateralMenuContainer, PageButton } from './styles';
import { HouseLine, Buildings, TrendUp, Bank, GlobeHemisphereWest, Coins, AirplaneTilt } from 'phosphor-react';

export function LateralMenu() {
    return (
        <LateralMenuContainer>
            <PageButton>
                <HouseLine />
                <p>Dashboard</p>
            </PageButton>

            <PageButton>
                <Buildings />
                <p>FII</p>
            </PageButton>

            <PageButton>
                <TrendUp />
                <p>Ações</p>
            </PageButton>

            <PageButton>
                <Bank />
                <p>Renda fixa</p>
            </PageButton>

            <PageButton>
                <GlobeHemisphereWest />
                <p>BDR</p>
            </PageButton>

            <PageButton>
                <Coins />
                <p>ETF</p>
            </PageButton>

            <PageButton>
                <AirplaneTilt />
                <p>Milhas</p>
            </PageButton>
            
        </LateralMenuContainer>
    )
}