import * as React from "react";
import {Input} from "semantic-ui-react";
import './text-input.css';

export const CustomTextInput = React.memo((props) => {
  const inputProps = {
    ...props,
    label: undefined,
  }

  return (
    <div className="textInput">
      <label>{props.label}</label>
      <Input
        {...inputProps}
      />
    </div>
  );
});
