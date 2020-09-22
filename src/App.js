import React from 'react';
import {CssBaseline} from "@material-ui/core";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from "./components";
import Resume from "./components/Resume/Resume";

const App = () => {
    return (
        <CssBaseline>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
        </CssBaseline>
    );
};

export default App;
