import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Stocks } from './pages/Stocks';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> } >
                <Route path="/" element={ <Home /> } />
                <Route path="/stocks" element={ <Stocks /> } />
            </Route>
        </Routes>
    )
}