import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Stocks } from './pages/Stocks';
import { Reits } from './pages/Reits';
import { PublicTitle } from './pages/PublicTitle';
import { BDR } from './pages/BDR';
import { ETF } from './pages/ETF';
import { Miles } from './pages/Miles';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> } >
                <Route path="/" element={ <Home /> } />
                <Route path="/stocks" element={ <Stocks /> } />
                <Route path="/reits" element={ <Reits /> } />
                <Route path="/publicTitle" element={ <PublicTitle /> } />
                <Route path="/bdr" element={ <BDR /> } />
                <Route path="/etf" element={ <ETF /> } />
                <Route path="/miles" element={ <Miles /> } />
            </Route>
        </Routes>
    )
}