import { Button, HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="Logo Invest Wallet" />
            <Button>
                Nova transação
            </Button>
        </HeaderContainer>
    )
}