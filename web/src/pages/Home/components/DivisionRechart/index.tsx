import { DivisionRechartContainer } from './styles';

import { PieChart, Pie, Cell, Tooltip, LabelList } from 'recharts';

export function DivisionRechart() {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <DivisionRechartContainer>
            <h2>Divisão patrimonial</h2>

            <PieChart width={500} height={300}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                >
                    <LabelList dataKey="name" />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

        </DivisionRechartContainer>
    )
}