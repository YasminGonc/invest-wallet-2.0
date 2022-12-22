import { PageMainInfo } from "../../../../components/PageMainInfo";
import { ResumeContainer } from "./styles";

export function Resume() {
    return (
        <ResumeContainer>
            <PageMainInfo title="FII" value={1000} percent={5} />
            <PageMainInfo title="Ações" value={1000} percent={5} />
            <PageMainInfo title="Renda fixa" value={1000} percent={5} />
            <PageMainInfo title="BDR" value={1000} percent={5} />
            <PageMainInfo title="ETF" value={1000} percent={5} />
            <PageMainInfo title="Milhas" value={40000} />
        </ResumeContainer>
    )
}