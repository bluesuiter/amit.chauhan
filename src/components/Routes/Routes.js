import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Pages from '../Pages';

const Routes = () => {
    return(       
        <Switch>
            <Route path="/:page">
                <Pages page=""/>
            </Route>
            <Route exact path="/">
                <Redirect to="/about" />
            </Route>
        </Switch>
    );
}

export default Routes;
