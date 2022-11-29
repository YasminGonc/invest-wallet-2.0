import { ActivesTable, TableResumeContainer } from './styles';

export function TableResume() {
    return (
        <TableResumeContainer>
            <h2>Atualização por ativo</h2>
            
            <ActivesTable>
                <thead>
                    <tr>
                        <td>Ativo</td>
                        <td>Valor investido</td>
                        <td>Valor total</td>
                        <td>Lucro/Prejuízo</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ações</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.100,00</td>
                        <td>1%</td>
                    </tr>
                    <tr>
                        <td>FIIs</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 900,00</td>
                        <td>-1%</td>
                    </tr>
                    <tr>
                        <td>Cripto</td>
                        <td>R$ 60,00</td>
                        <td>R$ 30,00</td>
                        <td>-50%</td>
                    </tr>
                    <tr>
                        <td>Renda fixa</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.100,00</td>
                        <td>1%</td>
                    </tr>
                </tbody>
            </ActivesTable>
        </TableResumeContainer>
    )
}