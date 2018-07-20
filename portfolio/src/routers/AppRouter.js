import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFound';
import ContactPage from '../components/Contact';
import HomePage from '../components/Home';
import PortfolioPage from '../components/PortfolioHome';
import PortfolioDetailPage from '../components/PortfolioDetail';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ HomePage } exact={ true }/>
                <Route path="/portfolio" component={ PortfolioPage } exact={ true }/>
                <Route path="/portfolio/:id" component={ PortfolioDetailPage } />
                <Route path="/contact" component={ ContactPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;