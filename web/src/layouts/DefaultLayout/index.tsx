import { Outlet } from 'react-router-dom';
import { GeneralInfo } from '../../components/GeneralInfo';
import { Header } from '../../components/Header';

export function DefaultLayout() {
    return(
        <div>
            <Header />
            <GeneralInfo />
            <Outlet />
        </div>
    )
}