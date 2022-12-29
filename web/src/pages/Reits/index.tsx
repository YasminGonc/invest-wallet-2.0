import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageMainInfo } from "../../components/PageMainInfo";
import { ProfitLossHighlight } from "../../components/ProfitLossHighlight";
import { api } from "../../lib/axios";
import { priceFormatter } from "../../utils/formatter";
import { ReitsContainer, ReitsTable, ResumeContainer } from "./styles";

interface Reits {
    id: number;
    reits: string;
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

export function Reits() {
    const [reits, setReits] = useState<Reits[]>([]);
    const [resume, setResume] = useState<Resume[]>([]);

    useEffect(() => {
        api.get('reits').then(response => setReits(response.data));
        api.get('resume').then(response => setResume(response.data));
    }, []);

    const navigate = useNavigate();

    function handleNavigation(active: string) {
        navigate(`/reits/${active}`);
    }

    return (
        <ReitsContainer>
            {resume[1] &&
                <ResumeContainer>
                    <PageMainInfo title='Total aportado' value={resume[1].discountedInvestedAmount / 100} type='currency' />
                    <PageMainInfo title='Total atualizado' value={resume[1].marketValue / 100} type='currency' />
                    <PageMainInfo title='Retorno' value={Number((((resume[1].marketValue - resume[1].discountedInvestedAmount) / resume[1].discountedInvestedAmount) * 100).toFixed(2))} type='percent' />
                </ResumeContainer>
            }

            <ReitsTable>
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
                    {reits.map(reit => {
                        const investedAmount = reit.investedAmount / 100;
                        const averagePrice = investedAmount / reit.quantity;
                        const discountedAveragePrice = ((reit.investedAmount - reit.dividendAmount.total) / 100) / reit.quantity;
                        const discountedAmount = discountedAveragePrice * reit.quantity;
                        const marketPrice = reit.marketPrice / 100;
                        const marketValue = marketPrice * reit.quantity;
                        const activeReturn = Number((((marketValue - discountedAmount) / discountedAmount) * 100).toFixed(2));

                        return (
                            <tr key={reit.id} onClick={() => handleNavigation(reit.reits)}>
                                <td>{reit.reits}</td>
                                <td>{reit.quantity}</td>
                                <td>{priceFormatter.format(averagePrice)}</td>
                                <td>{priceFormatter.format(investedAmount)}</td>
                                <td>{priceFormatter.format(discountedAveragePrice)}</td>
                                <td>{priceFormatter.format(marketPrice)}</td>
                                <td>{priceFormatter.format(marketValue)}</td>
                                <td>DY</td>
                                <td>
                                    <ProfitLossHighlight
                                        variant={activeReturn > 0 ? 'profit' : 'loss'}
                                        value={activeReturn}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </ReitsTable>
        </ReitsContainer>
    )
}