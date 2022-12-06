import { IncomeContainer } from './styles';

import { ComposedChart, XAxis, YAxis, Bar, Label, LabelList } from 'recharts';

export function IncomeRechart() {
    const data = [
        {
            year: '2020',
            Rendimentos: 74.20,
        },
        {
            year: '2021',
            Rendimentos: 227.88,
        },
        {
            year: '2022',
            Rendimentos: 259.58,
        }
    ];

    return (
        <IncomeContainer>
            <h2>Rendimentos</h2>

            <ComposedChart data={data} width={600} height={250} margin={{ top: 10, right: 10, bottom: 15, left: 10 }}>
                <XAxis dataKey="year" stroke="#BAB5B5" >
                    <Label value="Ano" offset={0} position="bottom" fill="#BAB5B5" />
                </XAxis>

                <YAxis stroke="#BAB5B5" >
                    <Label value="R$" offset={0} position="insideLeft" angle={-90} fill="#BAB5B5" />
                </YAxis>

                <Bar dataKey="Rendimentos" barSize={40} fill="#89CFCC" >
                    <LabelList dataKey="Rendimentos"  />
                </Bar>
            </ComposedChart>
        </IncomeContainer>
    )
}