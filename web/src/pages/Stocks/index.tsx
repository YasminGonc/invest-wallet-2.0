import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { priceFormatter } from '../../utils/formatter';
import { ProfitLossHighlight, StocksContainer, StocksTable } from './styles';

interface Stockes {
    id: number;
    stock: string;
    quantity: number;
    investedAmount: number;
    dividendAmount: number;
}

export function Stocks() {
    const [stockes, setStockes] = useState<Stockes[]>([]);

    useEffect(() => {
        api.get('stockes').then(response => setStockes(response.data));
    }, []);

    return (
        <StocksContainer>
            <StocksTable>
                <thead>
                    <tr>
                        <td>Empresa</td>
                        <td>Quantidade</td>
                        <td>Preço Médio</td>
                        <td>Valor Aportado</td>
                        <td>Preço de Mercado</td>
                        <td>Valor de Mercado</td>
                        <td>DY</td>
                        <td>Lucro/Prejuízo</td>
                    </tr>
                </thead>
                <tbody>
                    {stockes.map(stock => {
                        return (
                            <tr key={stock.id}>
                                <td>{stock.stock}</td>
                                <td>{stock.quantity}</td>
                                <td>{priceFormatter.format((stock.investedAmount/100) / stock.quantity)}</td>
                                <td>{priceFormatter.format(stock.investedAmount/100)}</td>
                                <td>R$ 35,20</td>
                                <td>R$ 211,20</td>
                                <td>DY</td>
                                <td>
                                    <ProfitLossHighlight variant='profit'>
                                        9,10%
                                    </ProfitLossHighlight>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </StocksTable>
        </StocksContainer>

    )
}