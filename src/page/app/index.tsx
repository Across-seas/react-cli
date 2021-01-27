import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createHashHistory } from "history";

import Home from '../home';
import Login from '../login';

const hashHistory = createHashHistory();

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Switch>
                        <Route
                            path="/"
                            component={Login}
                            render={() => {
                                return <Redirect to="/login" />;
                            }}
                            exact
                        ></Route>
                        <Route exact path="/home" component={Home}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
