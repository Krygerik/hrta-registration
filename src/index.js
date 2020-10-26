import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {GlobalStyles} from './index-styled';
import {Global} from './classes';
import {Cursor} from "./components";

ReactDOM.render(
  <React.StrictMode>
    <Global.Provider>
      <GlobalStyles />
      <Cursor />
      <App />
    </Global.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
