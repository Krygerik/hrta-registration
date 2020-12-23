import * as React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {App} from './pages/registration/App';
import {Calculator} from './pages/calculator';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/registration" component={App}/>
      <Route path="/calculator" component={Calculator}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
