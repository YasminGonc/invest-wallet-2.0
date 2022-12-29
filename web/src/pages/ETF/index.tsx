import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageMainInfo } from "../../components/PageMainInfo";
import { ProfitLossHighlight } from "../../components/ProfitLossHighlight";
import { api } from "../../lib/axios";
import { priceFormatter } from "../../utils/formatter";
import { EtfContainer, EtfTable, ResumeContainer } from "./styles";

interface etf {
    id: number;
    etf: string;
    quantity: number;
    investedAmount: number;
    marketPrice: number;
}

interface Resume {
    id: string;
    discountedInvestedAmount: number;
    marketValue: number;
}

export function ETF() {
    const [etf, setEtf] = useState<etf[]>([]);
    const [resume, setResume] = useState<Resume[]>([]);

    useEffect(() => {
        api.get('etf').then(response => setEtf(response.data));
        api.get('resume').then(response => setResume(response.data));
    }, []);

    const navigate = useNavigate();

    function handleNavigation(active: string) {
        navigate(`/stocks/${active}`);
    }

    return (
        <EtfContainer>
            {resume[2] &&
                <ResumeContainer>
                    <PageMainInfo title='Total aportado' value={resume[2].discountedInvestedAmount / 100} type='currency' />
                    <PageMainInfo title='Total atualizado' value={resume[2].marketValue / 100} type='currency' />
                    <PageMainInfo title='Retorno' value={Number((((resume[2].marketValue - resume[2].discountedInvestedAmount) / resume[2].discountedInvestedAmount) * 100).toFixed(2))} type='percent' />
                </ResumeContainer>
            }
            
            <EtfTable>
                <thead>
                    <tr>
                        <td>ETF</td>
                        <td>Quantidade</td>
                        <td>Preço Médio</td>
                        <td>Valor Aportado</td>
                        <td>Preço de Mercado</td>
                        <td>Valor de Mercado</td>
                        <td>Lucro/Prejuízo</td>
                    </tr>
                </thead>
                <tbody>
                    {etf.map(etf => {
                        const investedAmount = etf.investedAmount / 100;
                        const averagePrice = investedAmount / etf.quantity;
                        const marketPrice = etf.marketPrice / 100;
                        const marketValue = marketPrice * etf.quantity;
                        const activeReturn = Number((((marketValue - investedAmount) / investedAmount) * 100).toFixed(2));

                        return (
                            <tr key={etf.id} onClick={() => handleNavigation(etf.etf)}>
                                <td>{etf.etf}</td>
                                <td>{etf.quantity}</td>
                                <td>{priceFormatter.format(averagePrice)}</td>
                                <td>{priceFormatter.format(investedAmount)}</td>
                                <td>{priceFormatter.format(marketPrice)}</td>
                                <td>{priceFormatter.format(marketValue)}</td>
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
            </EtfTable>
        </EtfContainer>
    )
}