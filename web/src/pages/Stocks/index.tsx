import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageMainInfo } from '../../components/PageMainInfo';
import { ProfitLossHighlight } from '../../components/ProfitLossHighlight';
import { api } from '../../lib/axios';
import { priceFormatter } from '../../utils/formatter';
import { ResumeContainer, StocksContainer, StocksTable } from './styles';

interface Stockes {
    id: number;
    stock: string;
    quantity: number;
    investedAmount: number;
    marketPrice: number;
    dividendAmount: {
        total: number;
        '2019'?: number;
        '2020'?: number;
        '2021'?: number;
        '2022'?: number;
    }
}

interface Resume {
    id: string;
    discountedInvestedAmount: number;
    marketValue: number;
}

export function Stocks() {
    const [stockes, setStockes] = useState<Stockes[]>([]);
    const [resume, setResume] = useState<Resume[]>([]);

    useEffect(() => {
        api.get('stockes').then(response => setStockes(response.data));
        api.get('resume').then(response => setResume(response.data));
    }, []);

    const navigate = useNavigate();

    function handleNavigation(active: string) {
        navigate(`/stocks/${active}`);
    }

    return (
        <StocksContainer>
            {resume[0] &&
                <ResumeContainer>
                    <PageMainInfo title='Total aportado' value={resume[0].discountedInvestedAmount / 100} type='currency' />
                    <PageMainInfo title='Total atualizado' value={resume[0].marketValue / 100} type='currency' />
                    <PageMainInfo title='Retorno' value={Number((((resume[0].marketValue - resume[0].discountedInvestedAmount) / resume[0].discountedInvestedAmount) * 100).toFixed(2))} type='percent' />
                </ResumeContainer>
            }

            <StocksTable>
                <thead>
                    <tr>
                        <td>Empresa</td>
                        <td>Quantidade</td>
                        <td>Preço Médio</td>
                        <td>Valor Aportado</td>
                        <td>Preço Médio Desc.</td>
                        <td>Preço de Mercado</td>
                        <td>Valor de Mercado</td>
                        <td>DY</td>
                        <td>Lucro/Prejuízo</td>
                    </tr>
                </thead>
                <tbody>
                    {stockes.map(stock => {
                        const investedAmount = stock.investedAmount / 100;
                        const averagePrice = investedAmount / stock.quantity;
                        const discountedAveragePrice = ((stock.investedAmount - stock.dividendAmount.total) / 100) / stock.quantity;
                        const discountedAmount = discountedAveragePrice * stock.quantity;
                        const marketPrice = stock.marketPrice / 100;
                        const marketValue = marketPrice * stock.quantity;
                        const activeReturn = Number((((marketValue - discountedAmount) / discountedAmount) * 100).toFixed(2));

                        return (
                            <tr key={stock.id} onClick={() => handleNavigation(stock.stock)}>
                                <td>{stock.stock}</td>
                                <td>{stock.quantity}</td>
                                <td>{priceFormatter.format(averagePrice)}</td>
                                <td>{priceFormatter.format(investedAmount)}</td>
                                <td>{priceFormatter.format(discountedAveragePrice)}</td>
                                <td>{priceFormatter.format(marketPrice)}</td>
                                <td>{priceFormatter.format(marketValue)}</td>
                                <td>DY</td>
                                <td>
                                    <ProfitLossHighlight
                                        value={activeReturn}
                                        variant={activeReturn > 0 ? 'profit' : 'loss'}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </StocksTable>
        </StocksContainer>

    )
}