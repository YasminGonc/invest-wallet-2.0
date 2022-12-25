import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfitLossHighlight } from "../../components/ProfitLossHighlight";
import { api } from "../../lib/axios";
import { priceFormatter } from "../../utils/formatter";
import { EtfContainer, EtfTable } from "./styles";

interface etf {
    id: number;
    etf: string;
    quantity: number;
    investedAmount: number;
}

export function ETF() {
    const [etf, setEtf] = useState<etf[]>([]);

    useEffect(() => {
        api.get('etf').then(response => setEtf(response.data))
    }, []);

    const navigate = useNavigate();

    function handleNavigation(active: string) {
        navigate(`/stocks/${active}`);
    }

    return (
        <EtfContainer>
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
                        return(
                            <tr key={etf.id} onClick={() => handleNavigation(etf.etf)}>
                                <td>{etf.etf}</td>
                                <td>{etf.quantity}</td>
                                <td>{priceFormatter.format((etf.investedAmount / 100) / etf.quantity)}</td>
                                <td>{priceFormatter.format(etf.investedAmount / 100)}</td>
                                <td>R$ 35,20</td>
                                <td>R$ 211,20</td>
                                <td>
                                    <ProfitLossHighlight variant='profit' value={9.10} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </EtfTable>
        </EtfContainer>
    )
}