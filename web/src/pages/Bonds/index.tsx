import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { priceFormatter } from "../../utils/formatter";
import { BondsContainer, BondsTable } from "./styles";

interface Bonds {
    id: number;
    bond: string;
    institution: string;
    rate: number;
    rateType: string;
    value: number;
}

export function Bonds() {
    const [bonds, setBonds] = useState<Bonds[]>([]);

    useEffect(() => {
        api.get('bonds').then(response => setBonds(response.data));
    }, []);

    return (
        <BondsContainer>
            <BondsTable>
                <thead>
                    <tr>
                        <td>Finalidade</td>
                        <td>Valor</td>
                        <td>Instituição</td>
                        <td>Taxa</td>
                        <td>Tipo</td>
                    </tr>
                </thead>
                <tbody>
                    {bonds.map(bond => {
                        return(
                            <tr key={bond.id}>
                                <td>{bond.bond}</td>
                                <td>{priceFormatter.format(bond.value / 100)}</td>
                                <td>{bond.institution}</td>
                                <td>{String(bond.rate / 100).replace('.', ',')}%</td>
                                <td>{bond.rateType}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </BondsTable>
        </BondsContainer>
    )
}