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
    marketValue: number,
    dividendAmount: {
        total: number;
        '2019'?: number;
        '2020'?: number;
        '2021'?: number;
        '2022'?: number;
    }
}

export function Stocks() {
    const [stockes, setStockes] = useState<Stockes[]>([]);

    useEffect(() => {
        api.get('stockes').then(response => setStockes(response.data));
    }, []);

    const navigate = useNavigate();

    function handleNavigation(active: string) {
        navigate(`/stocks/${active}`);
    }

    return (
        <StocksContainer>
            <ResumeContainer>
                <PageMainInfo title='Total aportado' value={1434} type='currency' />
                <PageMainInfo title='Total atualizado' value={1434} type='currency' />
                <PageMainInfo title='Retorno' value={1434} type='percent' />
            </ResumeContainer>

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
                        const activeReturn = Number(((((stock.marketValue * stock.quantity) - stock.investedAmount) / stock.investedAmount) * 100).toFixed(2));

                        return (
                            <tr key={stock.id} onClick={() => handleNavigation(stock.stock)}>
                                <td>{stock.stock}</td>
                                <td>{stock.quantity}</td>
                                <td>{priceFormatter.format((stock.investedAmount / 100) / stock.quantity)}</td>
                                <td>{priceFormatter.format(stock.investedAmount / 100)}</td>
                                <td>{priceFormatter.format(((stock.investedAmount - stock.dividendAmount.total) / 100) / stock.quantity)}</td>
                                <td>{priceFormatter.format(stock.marketValue / 100)}</td>
                                <td>{priceFormatter.format((stock.marketValue / 100) * stock.quantity)}</td>
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