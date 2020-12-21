import * as React from "react";
import {TextInputStyleWrapper} from "./text-input-styled";

type TProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = React.memo((props: TProps) => (
  <TextInputStyleWrapper>
    {props.label && <label>{props.label}</label>}
    <input
      {...props}
    />
  </TextInputStyleWrapper>
));
