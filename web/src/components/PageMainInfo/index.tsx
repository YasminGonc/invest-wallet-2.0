import { PageMainInfoContainer, Percent } from "./styles";

interface PageMainInfoProps {
    percent?: number;
    title: string;
    value: number;
}

export function PageMainInfo({ percent, title, value }: PageMainInfoProps) {
    const hasPercent = !!percent;

    return (
        <PageMainInfoContainer>
            {hasPercent && <Percent>{percent}%</Percent>}
            
            <div>
                <p>{title}</p>
                <p>{value}</p>
            </div>
        </PageMainInfoContainer>
    )
}