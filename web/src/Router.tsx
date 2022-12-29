import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Stocks } from './pages/Stocks';
import { Reits } from './pages/Reits';
import { Bonds } from './pages/Bonds';
import { ETF } from './pages/ETF';
import { Miles } from './pages/Miles';
import { ActiveDetails } from './pages/ActiveDetails';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> } >
                <Route path="/" element={ <Home /> } />
                <Route path="/stocks" element={ <Stocks /> } />
                <Route path="/reits" element={ <Reits /> } />
                <Route path="/bonds" element= { <Bonds />} />
                <Route path="/etf" element={ <ETF /> } />
                <Route path="/miles" element={ <Miles /> } />
                <Route path="/:activeType/:active" element={ <ActiveDetails /> } />
            </Route>
        </Routes>
    )
}