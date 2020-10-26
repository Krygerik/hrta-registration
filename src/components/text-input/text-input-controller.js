import * as React from "react";
import {Field} from "react-final-form";
import {CustomTextInput} from "./text-input";

export const TextInputController = React.memo((
  props
) => (
  <Field
    component={CustomTextInput}
    {...props}
  />
));
