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
    dividendAmount: {
        total: number;
        '2019'?: number;
        '2020'?: number;
        '2021'?: number;
        '2022'?: number;
    }
}

export function Reits() {
    const [reits, setReits] = useState<Reits[]>([]);

    useEffect(() => {
        api.get('reits').then(response => setReits(response.data))
    }, []);

    const navigate = useNavigate();

    function handleNavigation(active: string) {
        navigate(`/reits/${active}`);
    }

    return (
        <ReitsContainer>
            <ResumeContainer>
                <PageMainInfo title='Total aportado' value={1434} type='currency' />
                <PageMainInfo title='Total atualizado' value={1434} type='currency' />
                <PageMainInfo title='Retorno' value={1434} type='percent' />
            </ResumeContainer>

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
                        return(
                            <tr key={reit.id} onClick={() => handleNavigation(reit.reits)}>
                                <td>{reit.reits}</td>
                                <td>{reit.quantity}</td>
                                <td>{priceFormatter.format((reit.investedAmount / 100) / reit.quantity)}</td>
                                <td>{priceFormatter.format(reit.investedAmount / 100)}</td>
                                <td>{priceFormatter.format(((reit.investedAmount - reit.dividendAmount.total) / 100) / reit.quantity)}</td>
                                <td>R$ 35,00</td>
                                <td>R$ 211,20</td>
                                <td>DY</td>
                                <td>
                                    <ProfitLossHighlight variant='profit' value={9.10} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </ReitsTable>
        </ReitsContainer>
    )
}