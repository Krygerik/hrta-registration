import * as React from "react";
import {TextInputStyleWrapper} from "./text-input-styled";
import {Global} from "../../classes";
import {Field} from "react-final-form";

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
      <Field
        {...props}
      >
        {
          (inputProps) => (
            <input
              {...inputProps.input}
              onMouseOut={inputMouseOutHandler}
              onMouseOver={inputMouseOverHandler}
            />
          )
        }
      </Field>
    </TextInputStyleWrapper>
  );
});
