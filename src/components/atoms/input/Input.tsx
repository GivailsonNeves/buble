import { ChangeEventHandler } from "react";

import "./styles.scss";

interface Props {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "password";
  placeholder?: string;
  disabled?: boolean;
  value?: string;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <div className="app-input">
      <input {...props} />
    </div>
  );
};

export default Input;
