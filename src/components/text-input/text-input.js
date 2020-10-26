import * as React from "react";
import {TextInputStyleWrapper} from "./text-input-styled";
import {Global} from "../../classes";

export const CustomTextInput = React.memo((props) => {
  const {graphics} = Global.useContext();

  const inputMouseOutHandler = () => {
    graphics.cursor = 'default';
  };

  const inputMouseOverHandler = () => {
    graphics.cursor = 'pointer';
  };

  return (
    <TextInputStyleWrapper>
      <label>{props.label}</label>
      <input
        type="text"
        onMouseOut={inputMouseOutHandler}
        onMouseOver={inputMouseOverHandler}
        autocomplete="nope"
      />
    </TextInputStyleWrapper>
  );
});
