import { Outlet } from 'react-router-dom';
import { GeneralInfo } from '../../components/GeneralInfo';
import { Header } from '../../components/Header';
import { LateralMenu } from '../../components/LateralMenu';
import { MainContainer } from './styles';

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <GeneralInfo />
            
            <MainContainer>
                <LateralMenu />
                <Outlet />
            </MainContainer>
        </div>
    )
}