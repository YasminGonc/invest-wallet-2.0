import { GeneralInfoContainer } from './styles';

export function GeneralInfo() {
    return(
        <GeneralInfoContainer>
            <img src="https://github.com/YasminGonc.png" alt="Avatar do usuário" />
            
            <div>
                <p>Aporte mensal</p>
                <p><span>R$</span>500,00</p>
            </div>
        </GeneralInfoContainer>
    )
}