import * as React from "react";
import {Field} from "react-final-form";
import {CustomTextInput} from "./text-input-view";

export const TextInput = React.memo((
  props
) => (
  <Field
    component={CustomTextInput}
    {...props}
  />
));
