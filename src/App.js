import React from 'react';
import {CssBaseline} from "@material-ui/core";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from "./components";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
    return (
        <CssBaseline>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
        </CssBaseline>
    );
};

export default App;
