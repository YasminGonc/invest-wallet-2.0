import { IncomeContainer } from './styles';

import { ComposedChart, XAxis, YAxis, Tooltip, Bar, Line } from 'recharts';

export function Income() {
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

    const wrapperStyle = {
        color: 'black',
    }

    return(
        <IncomeContainer>
            <h2>Rendimentos</h2>

            <ComposedChart data={data} width={260} height={250}>
                <XAxis dataKey="year" stroke="#BAB5B5" />
                <YAxis stroke="#BAB5B5" />
                <Tooltip wrapperStyle={wrapperStyle} />
                <Bar dataKey="Rendimentos" barSize={40} fill="#89CFCC" />
            </ComposedChart>

        </IncomeContainer>
    )
}