import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {App} from './pages/registration/App';
import {Calculator} from './pages/calculator';
import {GlobalStyles} from './index-styled';
import {Global} from './classes';
import {Cursor} from "./components";
import 'semantic-ui-css/semantic.min.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Global.Provider>
      <GlobalStyles />
      <Cursor />
      <BrowserRouter>
        <Switch>
          <Route path="/registration" component={App}/>
          <Route path="/calculator" component={Calculator}/>
        </Switch>
      </BrowserRouter>
    </Global.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
