import { EquityGrowthContainer } from './styles';

import { ComposedChart, XAxis, YAxis, Tooltip, Bar, Line } from 'recharts';

export function EquityGrowth() {
    const data = [
        {
            year: '2020',
            'Valor investido': 100,
            Patrimônio: 800,
        },
        {
            year: '2021',
            'Valor investido': 868,
            Patrimônio: 967,
        },
        {
            year: '2022',
            'Valor investido': 868,
            Patrimônio: 967,
        },
        {
            year: '2022',
            'Valor investido': 868,
            Patrimônio: 967,
        }
    ];

    const wrapperStyle = {
        color: 'black',
    }

    return (
        <EquityGrowthContainer>
            <h2>Crescimento patrimonial</h2>

            <ComposedChart data={data} width={500} height={250}>
                <XAxis dataKey="year" stroke="#BAB5B5" />
                <YAxis stroke="#BAB5B5" />
                <Tooltip wrapperStyle={wrapperStyle} />
                <Bar dataKey="Valor investido" barSize={50} fill="#89CFCC" />
                <Line type="monotone" dataKey="Patrimônio" stroke="#C94277" />
            </ComposedChart>

        </EquityGrowthContainer>
    )
}