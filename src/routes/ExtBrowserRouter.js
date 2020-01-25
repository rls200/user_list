import React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const historyRef = createBrowserHistory();

const ExtBrowserRouter = ({children}) => (
    <Router history={historyRef}>
        {children}
    </Router>
);

export default ExtBrowserRouter;