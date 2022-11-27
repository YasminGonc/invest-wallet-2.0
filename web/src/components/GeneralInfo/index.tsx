import { GeneralInfoContainer, InfoContainer, InfosContainer, InfoTitle } from './styles';

export function GeneralInfo() {
    return (
        <GeneralInfoContainer>
            <img src="https://github.com/YasminGonc.png" alt="Avatar do usuário" />

            <InfosContainer>
                <InfoContainer>
                    <InfoTitle>Valor investido</InfoTitle>
                    <p><span>R$</span>500,00</p>
                </InfoContainer>

                <InfoContainer>
                    <InfoTitle>Patrimônio atual</InfoTitle>
                    <p><span>R$</span>500,00</p>
                </InfoContainer>

                <InfoContainer>
                    <InfoTitle>Dividendo 2022</InfoTitle>
                    <p><span>R$</span>200,00</p>
                </InfoContainer>

                <InfoContainer>
                    <InfoTitle>Dividendo acumulado</InfoTitle>
                    <p><span>R$</span>500,00</p>
                </InfoContainer>

                <InfoContainer>
                    <InfoTitle>Retorno</InfoTitle>
                    <p>5%</p>
                </InfoContainer>
            </InfosContainer>
        </GeneralInfoContainer>
    )
}