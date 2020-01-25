import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

import allRoutes from './index';
import ExtBrowserRouter from "./ExtBrowserRouter";

const Routes = () => {
    return (
        <BrowserRouter>
            <ExtBrowserRouter>
                <Switch>
                    {allRoutes.map((route, index) => (
                        <route.route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </ExtBrowserRouter>
        </BrowserRouter>
    )
};

export default Routes;