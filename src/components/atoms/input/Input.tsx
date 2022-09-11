interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "password";
  placeholder?: string;
  value?: string;
}

import { type } from "os";
import { ChangeEventHandler } from "react";
import "./styles.scss";

export const Input: React.FC<Props> = (props) => {
  return (
    <div className="app-input">
      <input {...props} />
    </div>
  );
};

export default Input;
