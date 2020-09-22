import React from 'react';
import {CssBaseline} from "@material-ui/core";
import './App.css';

import Home from "./components";

const App = () => {
  return (
      <CssBaseline>
        <Home/>
      </CssBaseline>
  );
};

export default App;
