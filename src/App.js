import React from 'react';
import {CssBaseline} from "@material-ui/core";
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import ExpAndAchs from "./components/ExpAndAchs/ExpAndAchs";

const App = () => {
    return (
        <CssBaseline>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/experience_and_achievements" component={ExpAndAchs}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contacts}/>
            </Switch>
        </CssBaseline>
    );
};

export default App;
