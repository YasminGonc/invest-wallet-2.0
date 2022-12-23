import { priceFormatter } from "../../utils/formatter";
import { PageMainInfoContainer, Percent } from "./styles";

interface PageMainInfoProps {
    percent?: number;
    title: string;
    value: number;
    type: 'currency' | 'percent' | 'miles';
}

export function PageMainInfo({ percent, title, value, type }: PageMainInfoProps) {
    const hasPercent = !!percent;

    return (
        <PageMainInfoContainer>
            {hasPercent && <Percent>{percent}%</Percent>}

            {type === 'currency' &&
                <div>
                    <p>{title}</p>
                    <p>{priceFormatter.format(value)}</p>
                </div>
            }

            {type === 'miles' &&
                <div>
                    <p>{title}<span> pontos</span></p>
                    <p>{value}</p>
                </div>
            }

            {type === 'percent' &&
                <div>
                    <p>{title}</p>
                    <p>{value}%</p>
                </div>
            }
        </PageMainInfoContainer>
    )
}