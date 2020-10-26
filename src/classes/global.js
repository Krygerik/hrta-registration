import * as React from "react";
import { observer, useObserver } from 'mobx-react';
import {Graphics} from "./graphics";

export class Global {
  static Context = React.createContext(new Global());

  static Provider = observer(({ children }) => {
    return React.createElement(Global.Context.Provider, {
      value: new Global(),
      children
    });
  });

  static useContext() {
    return useObserver(() => React.useContext(Global.Context));
  }

  graphics = new Graphics();
}