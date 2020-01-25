import React from 'react';
import {Redirect,Route} from 'react-router-dom';

import Users from '../pages/users/Users';

const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/users" />,
    route: Route
};
const usersRoute = {
    path: '/users',
    exact: true,
    component: Users,
    route: Route
};

const allRoutes = [
    rootRoute,
    usersRoute
];

export default allRoutes;