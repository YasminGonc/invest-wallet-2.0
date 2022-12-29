import { LateralMenuContainer, PageButton } from './styles';
import { HouseLine, Buildings, TrendUp, Bank, GlobeHemisphereWest, Coins, AirplaneTilt } from 'phosphor-react';

export function LateralMenu() {
    return (
        <LateralMenuContainer>
            <PageButton to="/" title="Home" end>
                <HouseLine />
                Dashboard
            </PageButton>

            <PageButton to="/reits" title="FIIs">
                <Buildings />
                FII
            </PageButton>

            <PageButton to="/stocks" title="Ações">
                <TrendUp />
                Ações
            </PageButton>

            <PageButton to="/bonds" title="FIIs">
                <Bank />
                Renda fixa
            </PageButton>

            <PageButton to="/etf" title="ETF">
                <Coins />
                ETF
            </PageButton>

            <PageButton to="/miles" title="Milhas">
                <AirplaneTilt />
                Milhas
            </PageButton>
            
        </LateralMenuContainer>
    )
}