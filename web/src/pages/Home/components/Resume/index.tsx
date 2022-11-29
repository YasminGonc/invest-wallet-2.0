import { InfoContainer, Percent, ResumeContainer } from "./styles";

export function Resume() {
    return (
        <ResumeContainer>
            <InfoContainer>
                <Percent>5%</Percent>
                <div>
                    <p>FII</p>
                    <p><span>R$</span>1.000,00</p>
                </div>
            </InfoContainer>

            <InfoContainer>
                <Percent>5%</Percent>
                <div>
                    <p>Ações</p>
                    <p><span>R$</span>1.000,00</p>
                </div>
            </InfoContainer>

            <InfoContainer>
                <Percent>5%</Percent>
                <div>
                    <p>Renda fixa</p>
                    <p><span>R$</span>1.000,00</p>
                </div>
            </InfoContainer>

            <InfoContainer>
                <Percent>5%</Percent>
                <div>
                    <p>BDR</p>
                    <p><span>R$</span>1.000,00</p>
                </div>
            </InfoContainer>

            <InfoContainer>
                <Percent>5%</Percent>
                <div>
                    <p>ETF</p>
                    <p><span>R$</span>1.000,00</p>
                </div>
            </InfoContainer>

            <InfoContainer>
                <div>
                    <p>Milhas <span>pontos</span></p>
                    <p>40.000</p>
                </div>
            </InfoContainer>
        </ResumeContainer>
    )
}