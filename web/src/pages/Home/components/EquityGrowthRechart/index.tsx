import { EquityGrowthContainer } from './styles';

import { ComposedChart, XAxis, YAxis, Bar, Line, Label, LabelList } from 'recharts';
import { equityGrowthRechartData } from '../../../../lib/rechartsData';

export function EquityGrowthRechart() {
    return (
        <EquityGrowthContainer>
            <h2>Crescimento patrimonial</h2>

            <ComposedChart data={equityGrowthRechartData} width={600} height={250} margin={{ top: 10, right: 10, bottom: 15, left: 10 }}>
                <XAxis dataKey="year" stroke="#BAB5B5" >
                    <Label value="Ano" offset={0} position="bottom" fill="#BAB5B5" />
                </XAxis>

                <YAxis stroke="#BAB5B5" >
                    <Label value="R$" offset={0} position="insideLeft" angle={-90} fill="#BAB5B5"/>
                </YAxis>

                <Bar dataKey="Valor investido" barSize={50} fill="#89CFCC" >
                    <LabelList dataKey="Valor investido" />
                </Bar>

                <Line type="monotone" dataKey="Patrimônio" stroke="#C94277" >
                    <LabelList dataKey="Patrimônio" position="top" fill="#BAB5B5" />
                </Line>
            </ComposedChart>
        </EquityGrowthContainer>
    )
}